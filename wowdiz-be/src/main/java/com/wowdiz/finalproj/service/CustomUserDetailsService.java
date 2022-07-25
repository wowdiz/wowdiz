package com.wowdiz.finalproj.service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.mapper.UserMapper;

@Component("userDetailsService")
public class CustomUserDetailsService implements UserDetailsService {
	private final UserMapper userMapper;
	private final PasswordEncoder passwordEncoder;

	public CustomUserDetailsService(UserMapper userMapper, PasswordEncoder passwordEncoder) {
		this.userMapper = userMapper;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public UserDetails loadUserByUsername(String user_email) throws UsernameNotFoundException {
		
		
		
		if(user_email.contains("kakao:")==true) {
			String user = user_email.substring(user_email.lastIndexOf(":")+1);
			System.out.println("2"+user);
		return userMapper.selectUserWithAuthoritiesByUserEmail(user)
				.map(userDto -> createSnsUser(user, userDto))
				.orElseThrow(()-> new UsernameNotFoundException(user + " -> 데이터베이스에서 찾을 수 없습니다."));
		}
		else{
		
		return userMapper.selectUserWithAuthoritiesByUserEmail(user_email)
				.map(userDto -> createUser(user_email, userDto))
				.orElseThrow(()-> new UsernameNotFoundException(user_email + " -> 데이터베이스에서 찾을 수 없습니다."));
		}
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
	
	private org.springframework.security.core.userdetails.User createSnsUser(String user, UserDto userDto) {
		System.out.println("???");
		if (!userDto.isEnabled()) {
			throw new RuntimeException(user + " -> 활성화되어 있지 않습니다.");
		}
		System.out.println("카카오"+userDto);
		
//		DB에서 유저의 권한을 가져와서 List로 반환
//		List<GrantedAuthority> grantedAuthorities = userDto.getAuthorities().stream()
//				.map(authority -> new SimpleGrantedAuthority(authority.getAuthorityName()))
//				.collect(Collectors.toList());
		
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
        for (String grantedAuthority : userDto.getAuth().split(",")) {
        	grantedAuthorities.add(new SimpleGrantedAuthority(grantedAuthority));
        }
		System.out.println("fd?");
		return new org.springframework.security.core.userdetails.User("kakao:"+userDto.getUser_email(),
				userDto.getSns_id(),
				grantedAuthorities);
	}

}
