package com.wowdiz.finalproj.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

//JWT TOKEN을 생성하는 클래스
@Component
public class TokenProvider implements InitializingBean {
	
	private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
	//유저의 권한정보 식별자
	private static final String AUTHORITIES_KEY = "auth";
	
	private final String secretKey;
	private final long tokenValidityInMilliseconds;
	
	private Key key;
	
	public TokenProvider(@Value("${jwt.secret-key}") String secretKey,
			@Value("${jwt.token-validity-in-seconds}") long takenValidityInSeconds) {
		this.secretKey = secretKey;
		this.tokenValidityInMilliseconds = takenValidityInSeconds * 1000;
	}
	
	@Override
	public void afterPropertiesSet() {
		logger.debug(secretKey);
		byte[] keyBytes = Decoders.BASE64.decode(secretKey);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}
	
	//응답으로 보낼 JWT 토큰을 만드는 메서드
	public String createToken(Authentication authentication) {
		String authorities = authentication.getAuthorities().stream()
				.map(GrantedAuthority::getAuthority)
				.collect(Collectors.joining(","));
			
		long now = (new Date()).getTime();
		Date validity = new Date(now+this.tokenValidityInMilliseconds);		
		
		return Jwts.builder()
			//JWT의 "sub" : "Value"에 해당하는 부분
			//Authentication객체에 담긴 User의 이름 
			.setSubject(authentication.getName())
			.claim(AUTHORITIES_KEY, authorities)
			.signWith(key, SignatureAlgorithm.HS512)
			.setExpiration(validity)
			.compact();
	}
	
	//클라이언트로 부터 넘어온 token으로 Authentication객체를 반환하는 메서드
	public Authentication getAuthentication(String token) {
		Claims claims = Jwts
				.parserBuilder()
				.setSigningKey(key)
				.build()
				.parseClaimsJws(token)
				.getBody();
				
				Collection<? extends GrantedAuthority> authorities = 
				Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
				.map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
		
		User principal = new User(claims.getSubject(), "", authorities);
		
		return new UsernamePasswordAuthenticationToken(principal, token, authorities);
	}

	//클라이언트로 받은 Token의 헤더가 Bearer로 시작하는지 검사.
	public boolean isValidToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch(io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
			logger.info("잘못된 JWT 서명입니다");
		} catch(ExpiredJwtException e) {
			logger.info("만료된 JWT 토큰입니다.");
		} catch(UnsupportedJwtException e) {
			logger.info("지원되지 않는 JWT 토큰입니다.");
		} catch(IllegalArgumentException e) {
			logger.info("JWT 토큰이 잘못되었습니다.");
		}
		return false;
	}
}


//JWT는 크게 header(헤더), payload(내용), signature(서명)
//으로 이루어져 있다.

//header는 토큰의 타입과 해싱 알고리즘을 지정하는 정보를 포함

//payload는 토큰에 담을 정보를 저장한다.
//정보의 한 ‘조각’을 클레임(claim) 이라고 부르고, 이는 name / value 의 한 쌍을 이룬다.
//claim에는 3가지 종류가 있다.
//등록된 클레임(토큰에 대한 정보들을 담기위하여 이름이 이미 정해진 클레임들)
//공개 클레임(공개되는 클레임. 충돌되지 않는 고유 name으로 지정해야됨. 주로 URI로 지정)
//비공개 클레임(클라이언트 - 서버간에 통신을 위해 사용되는 클레임. 개인정보 등등)

//signature는 토큰의 조작 여부를 확인하기 위해 사용.
//header의 인코딩 값 + payload의 인코딩 값.
//합친 후에 주어진 secret key를 통해 해쉬값을 생성한다.