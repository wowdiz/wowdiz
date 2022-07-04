package com.wowdiz.finalproj.service;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.mapper.UserMapper;
import com.wowdiz.finalproj.util.SecurityUtil;

@Service
public class UserServiceImpl implements UserService{
	private final UserMapper userMapper;
	private final PasswordEncoder passwordEncoder;
	
	public UserServiceImpl(UserMapper userMapper, PasswordEncoder passwordEncoder) {
		this.userMapper = userMapper;
		this.passwordEncoder = passwordEncoder;
	}
	
	@Transactional
	public UserDto signup(UserDto userDto) {
		if(userMapper.selectUserWithAuthoritiesByUserEmail(userDto.getUser_email()).orElse(null)!=null) {
			throw new RuntimeException("이미 가입되어 있는 유저입니다.");
		}
		userDto.setUser_pwd(passwordEncoder.encode(userDto.getUser_pwd()));
		userDto.setAuth("ROLE_USER");
		userDto.setEnabled(true);
	
		userMapper.insertUser(userDto);
		return userDto;
	}
	
	@Transactional(readOnly = true)
	public Optional<UserDto> getUserWithAuthorities(String user_email){
		return userMapper.selectUserWithAuthoritiesByUserEmail(user_email);
	}
	
	@Transactional(readOnly = true)
	public Optional<UserDto> getUserWithAuthorities(){
		return SecurityUtil.getCurrentUserEmail().flatMap(userMapper::selectUserWithAuthoritiesByUserEmail);
	}
	
	
}
