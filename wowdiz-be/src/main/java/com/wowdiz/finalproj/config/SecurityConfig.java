package com.wowdiz.finalproj.config;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;

import com.wowdiz.finalproj.jwt.JwtAccessDeniedHandler;
import com.wowdiz.finalproj.jwt.JwtAuthenticationEntryPoint;
import com.wowdiz.finalproj.jwt.JwtSecurityConfig;
import com.wowdiz.finalproj.jwt.TokenProvider;

//웹 보안을 호라성화
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final TokenProvider tokenProvider;
    private final CorsFilter corsFilter;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    public SecurityConfig(
            TokenProvider tokenProvider,
            CorsFilter corsFilter,
            JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler
    ) {
        this.tokenProvider = tokenProvider;
        this.corsFilter = corsFilter;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
//	@Override
//	public void configure(WebSecurity web) {
//		web.ignoring()
//	}
	
    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                // token을 사용하는 방식이기 때문에 csrf를 disable합니다.
                .csrf().disable()

                .addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

                .exceptionHandling()
                .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                .accessDeniedHandler(jwtAccessDeniedHandler)

//                // enable h2-console
//                .and()
//                .headers()
//                .frameOptions()
//                .sameOrigin()

                // 세션을 사용하지 않기 때문에 STATELESS로 설정
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                .and()
                .authorizeRequests()
                //서버에서 제한없이 모든 접근 허용
                .antMatchers("/").permitAll()
                .antMatchers("/api/authenticate").permitAll()	
                .antMatchers("/api/user/signup").permitAll()

                .antMatchers("/api/user/sns/signup").permitAll()
                .antMatchers("/api/user/duplicateCheck").permitAll()  // 이메일 중복확인 및 인증코드 발송

                .antMatchers("/api/user/duplicateCheck").permitAll()
                .antMatchers("/supportboard/*").permitAll()

                .antMatchers("/purchase/getRewards").permitAll()

                //maker
                .antMatchers("/maker/*").permitAll()
                //upload 파일 접근
                .antMatchers("/save/*").permitAll()
                .antMatchers("/file/*").permitAll()
                .antMatchers("/ckeditorImages/*").permitAll()
                //admin
                .antMatchers("/admin/*").permitAll()
                
                .antMatchers("/UploadService").permitAll()
                .antMatchers("/api/user/emailConfirm").permitAll() // 이메일 인증코드확인
                .antMatchers("/api/user/nicknameCheck").permitAll() // 닉네임 중복확인
                .antMatchers("/api/user/oauth2/kakao/logout").permitAll() // 카카오 로그인
                .antMatchers("/api/user/oauth2/kakao").permitAll() // 카카오 로그인
                .antMatchers("/api/user/oauth2/naver").permitAll() // 닉네임 중복확인
                .antMatchers("/api/user/find/id").permitAll() // 아이디찾기
                .antMatchers("/api/user/find/password").permitAll() // 패스워드 찾기
                .antMatchers("/api/user/userinfo").hasAuthority("ROLE_USER") // 이름 및 닉네임 찾기
                .antMatchers("/api/user/userinfo/change").hasAuthority("ROLE_USER") // 유저 정보 변경 
                .antMatchers("/notice/list").permitAll()

                .anyRequest().authenticated()
                
                
                .and()
                .apply(new JwtSecurityConfig(tokenProvider));
 
    }
}