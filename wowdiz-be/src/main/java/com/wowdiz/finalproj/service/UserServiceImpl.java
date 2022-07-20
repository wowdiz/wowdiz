package com.wowdiz.finalproj.service;

import java.util.Map;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.RecommendationDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.dto.WowPointDto;
import com.wowdiz.finalproj.dto.WowPointHistoryDto;
import com.wowdiz.finalproj.mapper.UserMapper;
import com.wowdiz.finalproj.util.SecurityUtil;

@Service
public class UserServiceImpl implements UserService{
	private final UserMapper userMapper;
	private final PasswordEncoder passwordEncoder;
	private final EmailService emailService;

	
	public UserServiceImpl(UserMapper userMapper, PasswordEncoder passwordEncoder,EmailService emailService) {
		this.userMapper = userMapper;
		this.passwordEncoder = passwordEncoder;
		this.emailService =emailService;
	}
	
	@Transactional
	public String signup(UserDto userDto) {
		if(userMapper.selectUserWithAuthoritiesByUserEmail(userDto.getUser_email()).orElse(null)!=null) {
//			throw new RuntimeException("이미 가입되어 있는 유저입니다.");
			return "emailCheck";
		} else if(userMapper.authenticationEnabledSelect(userDto.getUser_email()) == "0") {
			return "emailCheck";
		} else if(userMapper.nicknameDuplicateSelect(userDto.getUser_nickname()) == 1) {
			return "nicknameCheck";
		} else if(userMapper.authenticationEnabledSelect(userDto.getUser_email()) == null) {
			return "emailCheck";
		}
		else {
		userDto.setUser_password(passwordEncoder.encode(userDto.getUser_password()));
		userDto.setAuth("ROLE_USER");
		userDto.setEnabled(true);
		userMapper.insertGeneralUser(userDto);
		AuthenticationDto authenticationDto = new AuthenticationDto();
		authenticationDto.setAuthentication_email(userDto.getUser_email());
		authenticationDto.setAuthentication_enabled(false);
		userMapper.authenticationEnabledUpdate(authenticationDto);
		return "pass";
		}
	}
	
	@Transactional(readOnly = true)
	public Optional<UserDto> getUserWithAuthorities(String user_email){
		return userMapper.selectUserWithAuthoritiesByUserEmail(user_email);
	}
	
	@Transactional(readOnly = true)
	public Optional<UserDto> getUserWithAuthorities(){
		return SecurityUtil.getCurrentUserEmail().flatMap(userMapper::selectUserWithAuthoritiesByUserEmail);
	}

	@Override
	public Integer emailDuplicateCheck(String user_email) {
//		String user_email = map.get("user_email");
//		System.out.println(user_email);
		System.out.println(userMapper.emailDuplicateSelect(user_email));
		return userMapper.emailDuplicateSelect(user_email);
	}

	@Override
	public Boolean authenticationCreate(Map<String,String> map) throws Exception {
		String user_email = map.get("user_email");
		System.out.println(user_email);
		Integer authenticationCheck=userMapper.authenticationSelect(user_email);
		
		
		if(authenticationCheck==1) {
			String authentication_key = emailService.sendSimpleMessage(user_email);
			AuthenticationDto authenticationDto = new AuthenticationDto();
			authenticationDto.setAuthentication_email(user_email);
			authenticationDto.setAuthentication_key(authentication_key);
			userMapper.authenticationUpdate(authenticationDto);
			return true;
		}else {
			String authentication_key = emailService.sendSimpleMessage(user_email);
			AuthenticationDto authenticationDto = new AuthenticationDto();
			authenticationDto.setAuthentication_email(user_email);
			authenticationDto.setAuthentication_key(authentication_key);
			userMapper.authenticationInsert(authenticationDto);
			return true;
		}
	
	}

	@Override
	public String authenticationKeySelect(String user_email) {
		
		return userMapper.authenticationKeySelect(user_email);
	}

	@Override
	public Boolean nicknameDuplicateSelect(Map<String, String> map) {
		String user_nickname = map.get("user_nickname");
		System.out.println(user_nickname);
		Integer nicknameCheck=userMapper.nicknameDuplicateSelect(user_nickname);
		System.out.println(nicknameCheck);
		if(nicknameCheck==1) {
			
			System.out.println("sdsd");
			return false;
		} else {
			return true;
		}
	}

	@Override
	public void authenticationSucces(String user_email) {
		
		AuthenticationDto authenticationDto = new AuthenticationDto();
		authenticationDto.setAuthentication_email(user_email);
		authenticationDto.setAuthentication_enabled(true);
		userMapper.authenticationEnabledUpdate(authenticationDto);
		
	}

	//회원가입시 추천인
	@Override
	public void recommendation(String user_email, String recommendation_email) {
		
	
		//유저고유값 
		Integer userID =userMapper.userIDSelect(user_email);
		//추천인 고유값
		Integer recmmendationID = userMapper.userIDSelect(recommendation_email);
		
		
		//추천인 포인트 3000원
		Integer recomendationPoint = 3000;
		
		// 최초 추천 생성
		RecommendationDto recommendationDto = new RecommendationDto();
		recommendationDto.setUser_id(userID);
		recommendationDto.setTarget_user_id(recmmendationID);
		userMapper.recommendationInsert(recommendationDto);
		// 유저 포인트 추가
		WowPointDto wowUserPointDto= new WowPointDto();
		wowUserPointDto.setUser_id(user_email);
		wowUserPointDto.setCurrent_wowpoint(recomendationPoint);
		userMapper.pointInsert(wowUserPointDto);
		// 추천인 포인트 추가 
		WowPointDto wowRecommenderPointDto = new WowPointDto();
		wowRecommenderPointDto.setUser_id(recommendation_email);
		wowRecommenderPointDto = userMapper.pointUser(wowRecommenderPointDto);
		wowRecommenderPointDto.setCurrent_wowpoint(wowRecommenderPointDto.getCurrent_wowpoint()+recomendationPoint);
		userMapper.pointUpdate(wowRecommenderPointDto);
		// 유저 히스토리 등록
		WowPointHistoryDto wowUserPointHistoryDto = new WowPointHistoryDto();
		wowUserPointHistoryDto.setUser_id(userID);
		wowUserPointHistoryDto.setPoint_amount(recomendationPoint);
		wowUserPointHistoryDto.setProccess_type("recommender");
		userMapper.pointHistoryInsert(wowUserPointHistoryDto);
		
		// 추천인 히스토리 등록
		WowPointHistoryDto wowRecommenderPointHistoryDto = new WowPointHistoryDto();
		wowRecommenderPointHistoryDto.setUser_id(recmmendationID);
		wowRecommenderPointHistoryDto.setPoint_amount(recomendationPoint);
		wowRecommenderPointHistoryDto.setProccess_type("recommender");
		userMapper.pointHistoryInsert(wowRecommenderPointHistoryDto);	
	}
	//최초 포인트 테이블 생성
	@Override
	public void pointInsert(String user_id, Integer current_wowpoint) {
		WowPointDto wowPointDto = new WowPointDto();
		wowPointDto.setUser_id(user_id);
		wowPointDto.setCurrent_wowpoint(current_wowpoint);
		userMapper.pointInsert(wowPointDto);
	}
	//포인트 충전
	@Override
	public void pointAdd(String user_id, Integer current_wowpoint) {
		WowPointDto wowPointDto = new WowPointDto();
		wowPointDto.setUser_id(user_id);
		wowPointDto.setCurrent_wowpoint(current_wowpoint);
		userMapper.pointUpdate(wowPointDto);
	}
	//포인트 검색
	@Override
	public Integer pointFind(String user_id) {
		// TODO Auto-generated method stub
		return null;
	}
}
