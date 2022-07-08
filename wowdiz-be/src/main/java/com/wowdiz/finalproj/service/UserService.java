package com.wowdiz.finalproj.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.util.SecurityUtil;

public interface UserService {
	public UserDto signup(UserDto userDto);
	
	public Optional<UserDto> getUserWithAuthorities(String user_email);
	
	public Optional<UserDto> getUserWithAuthorities();
}
