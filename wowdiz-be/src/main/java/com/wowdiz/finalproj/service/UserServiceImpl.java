package com.wowdiz.finalproj.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
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
	
	// 일반유저 및 카카오 유저 회원가입 
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
		userDto.setSns_id(passwordEncoder.encode(userDto.getSns_id()));
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
	
	//이메일 중복확인 및 이메일 찾기 
	@Override
	public Integer emailDuplicateCheck(String user_email) {
//		String user_email = map.get("user_email");
//		System.out.println(user_email);
		System.out.println(userMapper.emailDuplicateSelect(user_email));
		return userMapper.emailDuplicateSelect(user_email);
	}
	// 이메일 인증번호 생성 
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
	//이메일 인증키 값 
	@Override
	public String authenticationKeySelect(String user_email) {
		
		return userMapper.authenticationKeySelect(user_email);
	}
	//닉네임 중복확인 
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
	// 이메일 인증 확인
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
		System.out.println("test"+recommendation_email);
		WowPointDto wowRecommenderPointDto = new WowPointDto();
		wowRecommenderPointDto.setUser_id(recommendation_email);
		wowRecommenderPointDto = userMapper.pointUser(wowRecommenderPointDto);
		System.out.println("fdf"+wowRecommenderPointDto);
		wowRecommenderPointDto.setCurrent_wowpoint((Integer)(wowRecommenderPointDto.getCurrent_wowpoint()+recomendationPoint));
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
	//카카오 유저 정보 가져오기 
	@Override
	public Map<String, Object> kakaoUser(String access_Token) {
		// TODO Auto-generated method stub
		HashMap<String, Object> userInfo = new HashMap<String, Object>();
		String reqURL = "https://kapi.kakao.com/v2/user/me";
		try {
			URL url = new URL(reqURL);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");

			// 요청에 필요한 Header에 포함될 내용
			conn.setRequestProperty("Authorization", "Bearer " + access_Token);
			
			String headerType = conn.getContentType();
			

			BufferedReader br; 
			if (headerType.toUpperCase().indexOf("UTF-8")!=-1) {
			
			br= new BufferedReader(new InputStreamReader(conn.getInputStream(),"UTF-8"));
			}else {
				br= new BufferedReader(new InputStreamReader(conn.getInputStream(),"ECU-KR"));
			}
			String line = "";
			String result = "";

			while ((line = br.readLine()) != null) {
				result += line;
			}

			JsonParser parser = new JsonParser();
			JsonElement element = parser.parse(result);
   
			JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
			JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
			JsonObject profile = kakao_account.getAsJsonObject().get("profile").getAsJsonObject();
		
			String thumbnail_image_url=profile.getAsJsonObject().get("thumbnail_image_url").getAsString();
			String kakaoId= element.getAsJsonObject().get("id").getAsString();
			String nickname = properties.getAsJsonObject().get("nickname").getAsString();
			String email = kakao_account.getAsJsonObject().get("email").getAsString();
			String user_name = properties.getAsJsonObject().get("nickname").getAsString();
			
			userInfo.put("sns_id", kakaoId);
			userInfo.put("profile_picture", thumbnail_image_url);
			userInfo.put("sns_type", "kakao");
			userInfo.put("user_email", email);
			userInfo.put("user_name", user_name);
			
		} catch (IOException e) {
			e.printStackTrace();
		}

	return userInfo;
	}
	// SNS 등록 확인 
	@Override
	public UserDto snsIdfind(String user_email) {
		return userMapper.snsIdSelect(user_email);
	}
	// SNS 유저 등록 
	@Override
	public void snsInsert(UserDto userDto) {
		// TODO Auto-generated method stub
		 userMapper.snsInsert(userDto);
	}

	@Override
	public Integer snsUserDivision(String user_email) {
		UserDto userDto = new UserDto();
		userDto = userMapper.snsIdSelect(user_email);
		String sns_type=userDto.getSns_type();
		if(sns_type!=null) {
		
			if(sns_type.contains("user") == true && sns_type.contains("kakao")==false) {
				return 1; // 0이면 일반유저만 등록  
			}else if(sns_type.contains("kakao") == true && sns_type.contains("user")==false) {
				return 2; // 1이면 kakao 만 가입
			}else if(sns_type.contains("kakao") == true && sns_type.contains("user") == true){
				return 3; // 2이면 유저로도 가입 카카오로도 가입된 유저
			}else {
				return 4;
			}
		}else {
			return 1;
		}

	}
//  Password 찾기 실행시 인증번호 보내기 
	@Override
	public Integer findUserPassword(String user_email) {
		String authentication_key;
		try {
			authentication_key = emailService.sendSimpleMessage(user_email);
			AuthenticationDto authenticationDto = new AuthenticationDto();
			authenticationDto.setAuthentication_email(user_email);
			authenticationDto.setAuthentication_enabled(true);
			authenticationDto.setAuthentication_key(authentication_key);
			userMapper.authenticationEnabledUpdate(authenticationDto);
			userMapper.authenticationUpdate(authenticationDto);
			return 1;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
	
		return 0;
	}
// Password 변경
	@Override
	public void changePassword(UserDto userDto) {
		// TODO Auto-generated method stub
		userDto.setUser_password(passwordEncoder.encode(userDto.getUser_password()));
		userMapper.passwordUpdate(userDto);		
	}
	
}
