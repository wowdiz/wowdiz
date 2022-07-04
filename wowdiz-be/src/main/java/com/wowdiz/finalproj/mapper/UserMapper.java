package com.wowdiz.finalproj.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.LoginDto;
import com.wowdiz.finalproj.dto.UserDto;

@Mapper
public interface UserMapper {
	public Optional<UserDto> selectUserWithAuthoritiesByUserEmail(String userEmail);
	public void insertUser(UserDto userDto);
}
