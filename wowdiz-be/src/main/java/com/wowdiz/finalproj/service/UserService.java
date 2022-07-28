package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.wowdiz.finalproj.dto.UserAddressDto;
import com.wowdiz.finalproj.dto.UserDto;

public interface UserService {
//	회원가입
	public String signup(UserDto userDto);
//  회원가입 아이디중복확인 
	public Optional<UserDto> getUserWithAuthorities(String user_email);
	public Optional<UserDto> getUserWithAuthorities();
//	아이디 중복확인
	public Integer emailDuplicateCheck(String user_email);
//  닉네임 중복확인
	public Boolean nicknameDuplicateSelect(Map<String,String> map);
// 인증번호 서비스
	public Boolean authenticationCreate(Map<String,String> map) throws Exception;
// 인증번호 확인
	public String authenticationKeySelect(String user_email);
//  인증 완료
	public void authenticationSucces(String user_email);
// 추천인 명단 추가
	public void recommendation(String user_email, String recommendationID);
// 최초 포인트 명단 추가
	public void pointInsert(String user_id, Integer current_wowpoint);
// 포인트 추가
	public void pointAdd(String user_id, Integer current_wowpoint);
// 포인트 정보 확인
	public Integer pointFind(String user_id);
	
//카카오 토큰얻기
	public Map<String, Object> kakaoUser(String access_Token);
// 카카오 유저 찾기 	
	public UserDto snsIdfind(String user_email);
// 카카오 업데이트 
	public void snsInsert(UserDto userDto);
// 아이디 찾기 일반유저 및 sns 가입 유저 구분
	public Integer snsUserDivision(String user_email);
// Password 찾기
	public Integer findUserPassword(String user_email);
// Password 변경
	public void changePassword(UserDto userDto);
	
	public List<UserAddressDto> selectMyParcelAddress();
	public Integer insertMyParcelAddress(UserAddressDto userAddressDto);
}
