package com.wowdiz.finalproj.service;

import java.util.Map;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.UserDto;
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
	public UserDto signup(UserDto userDto) {
		if(userMapper.selectUserWithAuthoritiesByUserEmail(userDto.getUser_email()).orElse(null)!=null) {
			throw new RuntimeException("이미 가입되어 있는 유저입니다.");
		}
		
		userDto.setUser_password(passwordEncoder.encode(userDto.getUser_password()));
		userDto.setAuth("ROLE_USER");
		userDto.setEnabled(true);
	
		userMapper.insertGeneralUser(userDto);
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

	@Override
	public Integer duplicateCheck(Map<String,String> map) {
		String user_email = map.get("user_email");
		System.out.println(user_email);
		return userMapper.duplicateSelect(user_email);
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
			return false;
		}else {
			String authentication_key = emailService.sendSimpleMessage(user_email);
			AuthenticationDto authenticationDto = new AuthenticationDto();
			authenticationDto.setAuthentication_email(user_email);
			authenticationDto.setAuthentication_key(authentication_key);
			userMapper.authenticationInsert(authenticationDto);
			return true;
		}
	
	}
	
}
