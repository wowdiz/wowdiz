package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.InterestCategoryDto;
import com.wowdiz.finalproj.dto.LoginDto;
import com.wowdiz.finalproj.dto.RecommendationDto;
import com.wowdiz.finalproj.dto.UserAddressDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.dto.WowPointDto;
import com.wowdiz.finalproj.dto.WowPointHistoryDto;

@Mapper
public interface UserMapper {
	public Optional<UserDto> selectUserWithAuthoritiesByUserEmail(String userEmail);
	public Optional<UserDto> selectUserWithAuthoritiesBySnsUserEmail(Map<String, String> map);
//	회원가입
	public void insertGeneralUser(UserDto userDto);
//	이메일 중복확인
	public Integer emailDuplicateSelect(String user_email);
// 닉네임 중복확인
	public Integer nicknameDuplicateSelect(String user_nickname);
//  이메일 인증 사용자 확인
	public Integer authenticationSelect(String user_email);
//  이메일 인증번호 생성 
	public void authenticationInsert(AuthenticationDto authenticationDto);
// 인증번호 Enabled 키 확인
	public String authenticationEnabledSelect(String user_email);
// 인증번호 재전송
	public void authenticationUpdate(AuthenticationDto authenticationDto);
// 인증번호 확인
	public String authenticationKeySelect(String user_email);
// 	인증 Enabled 승인 및 초기화 
	public void authenticationEnabledUpdate(AuthenticationDto authenticationDto);
//  추천인 명단추가
	public void recommendationInsert(RecommendationDto recommendationDto);
// 회원 고유 식별자 찾기
	public Integer userIDSelect(String user_email);
// 회원가입시 최초 포인트 등록	
	public void pointInsert(WowPointDto wowPointDto);	
// 포인트 히스토리 등록
	public void pointHistoryInsert(WowPointHistoryDto wowPointHistoryDto);
// 포인트 업데이트 
	public void pointUpdate(WowPointDto wowPointDto);
// 포인트 테이블 확인
	public WowPointDto pointUser (WowPointDto wowPointDto);
// SNS 가입한 사실확인
	public UserDto snsIdSelect(String user_email); 
// SNS 업데이트 
	public void snsInsert(UserDto userDto);
// Password 변경
	public void passwordUpdate(UserDto userDto);
	
	public List<UserAddressDto> selectMyParcelAddress(Integer integer);
	
	public Integer insertMyParcelAddress(UserAddressDto userAddressDto);
// 유저 이름 및 닉네임 찾기
	public UserDto userNameSelect(String user_email);	
// 유저 닉네임 변경
	public void userInfoNicknameUpdate(UserDto userDto);	
// 유저 사진 변경
	public void userInfoProfileUpdate(UserDto userDto);		
// 유저 폰번호 변경
	public void userInfoPhoneUpdate(UserDto userDto);
// 유저 관심사 최초등록
	public void userInterestInsert(InterestCategoryDto interestCategoryDto);
// 유저 관심 확인
	public String userInterestSelect(Integer user_id);
// 유저 관심사 변경
	public void userInterestUpdate(InterestCategoryDto interestCategoryDto);
// mypage 한번에 정보가져오기 join
	public Map<String, Object> myPageUserInfo(String user_email);
}
