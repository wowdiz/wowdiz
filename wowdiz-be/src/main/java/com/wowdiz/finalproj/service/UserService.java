package com.wowdiz.finalproj.service;

import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.RecommendationDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.dto.WowPointDto;
import com.wowdiz.finalproj.util.SecurityUtil;

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
	public void pointInsert(Integer user_id, Integer current_wowpoint);
// 포인트 추가
	public void pointAdd(Integer user_id, Integer current_wowpoint);
// 포인트 정보 확인
	public Integer pointFind(Integer user_email);
	
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
// 유저 이름 및 닉네임 로드
	public Map<String, String> userInfoLoad(String user_email);
// 유저 정보 변경
	public void userInfoChage(Map<String, String> map);
// myPage 한번에 정보가져오기
	public Map<String, String> myPageInfoLoad(String user_email);


}
