package com.wowdiz.finalproj.controller;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.LoginDto;
import com.wowdiz.finalproj.dto.TokenDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.jwt.JwtFilter;
import com.wowdiz.finalproj.jwt.TokenProvider;
import com.wowdiz.finalproj.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class AuthController {
	private final TokenProvider tokenProvider;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final UserService userService;
	private final PasswordEncoder passwordEncoder;

	
	public AuthController(TokenProvider tokenProvider, AuthenticationManagerBuilder authenticationManagerBuilder,UserService userService,PasswordEncoder passwordEncoder) {
		this.tokenProvider = tokenProvider;
		this.authenticationManagerBuilder = authenticationManagerBuilder;
		this.userService = userService;
		this.passwordEncoder = passwordEncoder;

	}
	
	@PostMapping("/authenticate")
	public ResponseEntity<TokenDto> authorize(@Valid @RequestBody LoginDto loginDto){
		UsernamePasswordAuthenticationToken authenticationToken = 
				new UsernamePasswordAuthenticationToken(loginDto.getUser_email(), loginDto.getUser_pwd());
		
		try {
		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
			
		SecurityContextHolder.getContext().setAuthentication(authentication);
	
		String jwt = tokenProvider.createToken(authentication);
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
		return new ResponseEntity<>(new TokenDto(jwt,""), httpHeaders, HttpStatus.OK);
		} catch(UsernameNotFoundException e) {
			e.getStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		
	}
	
	@PostMapping("/user/oauth2/kakao")
	public ResponseEntity<TokenDto> KakaoLogin(@RequestBody Map<String, String> map) throws ParseException  {
		
		String accessToken = map.get("access_token");
		Map<String, Object> map1 = new HashMap<>();
		map1 = userService.kakaoUser(accessToken);

		String kakaoEmail = "kakao:"+(String)map1.get("user_email");
		String sns_id = (String)map1.get("sns_id");
		String sns_type = "kakao";
		String sns_image = (String)map1.get("profile_picture");
		if(userService.emailDuplicateCheck((String)map1.get("user_email"))!=1) {
			//sns 회원가입창으로 이동
			HttpHeaders httpHeaders = new HttpHeaders();
			return new ResponseEntity<>(new TokenDto(sns_type+","+sns_id+","+(String)map1.get("user_email")+","+(String)map1.get("user_name")+","+sns_image,sns_type),httpHeaders, HttpStatus.OK);
		}
		else {
		UserDto userDto = new UserDto();
		userDto=userService.snsIdfind((String)map1.get("user_email"));
		String sns_types = (String)userDto.getSns_type();
		if(sns_types==null) {
		userDto.setSns_type("user,kakao");
		userDto.setSns_id(passwordEncoder.encode((String)map1.get("sns_id")));
		userService.snsInsert(userDto);
		}else if(sns_types.contains("naver")){
			userDto.setSns_type("user,kakao,naver");
			userDto.setSns_id(passwordEncoder.encode((String)map1.get("sns_id")));
			userService.snsInsert(userDto);
		}
			
				
		UsernamePasswordAuthenticationToken authenticationToken = 
				new UsernamePasswordAuthenticationToken(kakaoEmail,(String)map1.get("sns_id"));
		try {
			
			Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
			 System.out.println("200"+authentication);
			System.out.println(authenticationToken);
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			String jwt = tokenProvider.createToken(authentication);
			System.out.println("jwt생성"+jwt);
			HttpHeaders httpHeaders = new HttpHeaders();
			sns_id="kakao_user="+(String)map1.get("user_email");
			httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);
			System.out.println("jwt:"+jwt);
			return new ResponseEntity<>(new TokenDto(jwt,sns_id), httpHeaders, HttpStatus.OK);
			} catch(UsernameNotFoundException e) {
				e.getStackTrace();
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}

}

