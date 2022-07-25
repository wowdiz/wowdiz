package com.wowdiz.finalproj.service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.mapper.UserMapper;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
	private final UserMapper userMapper;

	public CustomUserDetailsService(UserMapper userMapper) {
		this.userMapper = userMapper;
	}

	@Override
	public UserDetails loadUserByUsername(String user_email) throws UsernameNotFoundException {
							
			return userMapper.selectUserWithAuthoritiesByUserEmail(user_email)
				.map(userDto -> createUser(user_email, userDto))
				.orElseThrow(()-> new UsernameNotFoundException(user_email + " -> 데이터베이스에서 찾을 수 없습니다."));
	}
	
	private org.springframework.security.core.userdetails.User createUser(String user_email, UserDto userDto) {
		if (!userDto.isEnabled()) {
			throw new RuntimeException(user_email + " -> 활성화되어 있지 않습니다.");
		}
		System.out.println(userDto);
		
//		DB에서 유저의 권한을 가져와서 List로 반환
//		List<GrantedAuthority> grantedAuthorities = userDto.getAuthorities().stream()
//				.map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
//				.collect(Collectors.toList());
		
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (String grantedAuthority : userDto.getAuth().split(",")) {
        	grantedAuthorities.add(new SimpleGrantedAuthority(grantedAuthority));
        }
		
		return new org.springframework.security.core.userdetails.User(userDto.getUser_email(),
				userDto.getUser_password(),
				grantedAuthorities);
	}


}
