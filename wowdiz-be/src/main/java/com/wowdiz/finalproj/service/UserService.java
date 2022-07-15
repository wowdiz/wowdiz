package com.wowdiz.finalproj.service;

import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.util.SecurityUtil;

public interface UserService {
//	회원가입
	public UserDto signup(UserDto userDto);

	public Optional<UserDto> getUserWithAuthorities(String user_email);

	public Optional<UserDto> getUserWithAuthorities();
//	아이디 중복확인
	public Integer duplicateCheck(Map<String,String> map);
// 인증번호 서비스
	public Boolean authenticationCreate(Map<String,String> map) throws Exception;
}
