package com.wowdiz.finalproj.mapper;

import java.util.Map;
import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.LoginDto;
import com.wowdiz.finalproj.dto.UserDto;

@Mapper
public interface UserMapper {
	public Optional<UserDto> selectUserWithAuthoritiesByUserEmail(String userEmail);
//	회원가입
	public void insertGeneralUser(UserDto userDto);
//	이메일 중복확인
	public Integer duplicateSelect(String user_email);
//  이메일 인증 사용자 확인
	public Integer authenticationSelect(String user_email);
//  이메일 인증번호 생성 
	public void authenticationInsert(AuthenticationDto authenticationDto);
// 인증번호 재전송
	public void authenticationUpdate(AuthenticationDto authenticationDto);
// 인증번호 확인
	public String authenticationKeySelect(String authentication_Key);
}
