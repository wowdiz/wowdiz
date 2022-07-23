package com.wowdiz.finalproj.mapper;

import java.util.Map;
import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.LoginDto;
import com.wowdiz.finalproj.dto.RecommendationDto;
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
	public WowPointDto pointUser(WowPointDto wowPointDto);
// SNS 가입한 사실확인
	public UserDto snsIdSelect(String user_email); 
// SNS 업데이트 
	public void snsInsert(UserDto userDto);
	
}
