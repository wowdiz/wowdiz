package com.wowdiz.finalproj.util;

import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public class SecurityUtil {
	private static final Logger logger = LoggerFactory.getLogger(SecurityUtil.class);
	
	public static Optional<String> getCurrentUserEmail(){
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		
		if (authentication == null) {
			logger.debug("Security Context에 인증 정보가 없습니다.");
			return Optional.empty();
		}
		
		String user_email = null;
		if(authentication.getPrincipal() instanceof UserDetails) {
			UserDetails	springSecurityUser = (UserDetails) authentication.getPrincipal();
			user_email = springSecurityUser.getUsername();
		} else if (authentication.getPrincipal() instanceof String) {
			user_email = (String) authentication.getPrincipal();
		}
		
		return Optional.ofNullable(user_email);
	}
}
