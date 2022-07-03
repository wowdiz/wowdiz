package com.wowdiz.finalproj.mapper;

import java.util.Optional;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.UserDto;

@Mapper
public interface UserMapper {
	public Optional<UserDto> selectUserWithAuthoritiesByUserEmail(String user_email);
	public Integer insertUser(UserDto userDto);
}
