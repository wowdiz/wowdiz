package com.wowdiz.finalproj.controller;

import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.service.EmailService;
import com.wowdiz.finalproj.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

   
   private final UserService userService;
   private final EmailService emailService;
   private final PasswordEncoder passwordEncoder;

   
   public UserController(UserService userService, EmailService emailService, PasswordEncoder passwordEncoder) {
      this.userService = userService;
      this.emailService = emailService;
      this.passwordEncoder = passwordEncoder;
   }
   

   @PostMapping("/user/signup")
   public ResponseEntity<String> signup(@Valid @RequestBody UserDto userDto) {
	   String recommenderEmail = userDto.getUser_recommend();
	   
	   //추천인 아이디 입력시 
	   if(recommenderEmail != "" ) {
		   //추천인 ID가 존재시 작업
		   if(userService.emailDuplicateCheck(recommenderEmail)==1) {
			   String result = userService.signup(userDto);
			   if(result.equals("pass")) {
				
				 userService.recommendation(userDto.getUser_email(), recommenderEmail);
				 //회원가입 성공시 
				 return ResponseEntity.ok(result);
			   }else {
				   //회원가입 오류시 
				   return ResponseEntity.ok(userService.signup(userDto)); 
			   }   	   
		   }else
			   //추천인 ID 가 존재하지않을시 Error
			   return ResponseEntity.ok("recommederError");
	   }
	   //추천인 아이디를 입력하지 않았을떄 
	   else {
		   //회원가입 성공 
		   if(userService.signup(userDto).equals("pass")) {
		      userService.pointInsert(userDto.getUser_id(), 0);
			  return ResponseEntity.ok("pass"); 
		   }else {
			//회원가입 실패 
			   return ResponseEntity.ok(userService.signup(userDto)); 
		   }
	   }
   }
   @PostMapping("/user/sns/signup")
   public ResponseEntity<String> snsSignup(@Valid @RequestBody UserDto userDto) {
	   String recommenderEmail = userDto.getUser_recommend();
	   String snsId = userDto.getSns_id()+"E!";
	   userDto.setUser_password(passwordEncoder.encode(snsId));
	   //추천인 아이디 입력시 
	   if(recommenderEmail != "" ) {
		   //추천인 ID가 존재시 작업
		   if(userService.emailDuplicateCheck(recommenderEmail)==1) {
			   if(userService.signup(userDto).equals("pass")) {
				 userService.recommendation(userDto.getUser_email(), recommenderEmail);
				 //회원가입 성공시 
				 return ResponseEntity.ok("pass");
			   }else {
				   //회원가입 오류시 
				   return ResponseEntity.ok(userService.signup(userDto)); 
			   }   	   
		   }else
			   //추천인 ID 가 존재하지않을시 Error
			   return ResponseEntity.ok("recommederError");
	   }
	   //추천인 아이디를 입력하지 않았을떄 
	   else {
		   //회원가입 성공 
		   if(userService.signup(userDto).equals("pass")) {
		      userService.pointInsert(userDto.getUser_id(), 0);
			  return ResponseEntity.ok("pass"); 
		   }else {
			//회원가입 실패 
			   return ResponseEntity.ok(userService.signup(userDto)); 
		   }
	   }
   }
  
   
   @GetMapping("/user")
   @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
   public ResponseEntity<UserDto> getMyUserInfo() {
      return ResponseEntity.ok(userService.getUserWithAuthorities().get());
   }
   
   @GetMapping("/user/{user_email}")
   @PreAuthorize("hasAnyRole('ADMIN')")
   public ResponseEntity<UserDto> getMyUserInfo(@PathVariable String user_email) {
      System.out.println(user_email);
      return ResponseEntity.ok(userService.getUserWithAuthorities(user_email).get());
   }
   
//	이메일 (ID 중복확인 및 이메일 인증번호 보내기)
	@PostMapping("/user/duplicateCheck")
	public ResponseEntity<String> duplicateCheck(@RequestBody Map<String, String> map ) throws Exception {
		String user_email = map.get("user_email");
		Integer confirmCheck = userService.emailDuplicateCheck(user_email);
		if(user_email == "") { //이메일 null 값이면  인증번호 생성 x
			return ResponseEntity.badRequest().body("email empty");
		} else if(confirmCheck == 1) { // 이메일이 중복이면  인증번호 생성 x
			return ResponseEntity.ok("cofirm");
		} else { // 이메일이 신규이면 해당 이메일로 인증번호 생성 및 전달
			Boolean authenticationCreate = userService.authenticationCreate(map);
			return ResponseEntity.ok("pass");	
		}
	}
	
	//인증번호 확인하기 
	@PostMapping("/user/emailConfirm")
	public ResponseEntity<String> emailConfirm(@RequestBody Map<String, String> map ) throws Exception {
		System.out.println(map);
		
		String user_email = map.get("user_email");
		System.out.println(user_email);
		String authentication_key = map.get("authentication_key");
		System.out.println(authentication_key);
		
		String keyConfrim = userService.authenticationKeySelect(user_email); //해당 이메일 인증번호 확인
		System.out.println(keyConfrim);
		
		
		if(authentication_key.equals(keyConfrim)) { // 해당 인증번호 이메일 일치하면 enabled true
			userService.authenticationSucces(user_email);
			return ResponseEntity.ok("true");
		} else {
			return ResponseEntity.ok("false");
		}
	}
	 //닉네임 중복확인
	@PostMapping("/user/nicknameCheck")
	public ResponseEntity<Boolean> nicknameCheck(@RequestBody Map<String, String> map) throws Exception {
		System.out.println(map);
		Boolean nickname = userService.nicknameDuplicateSelect(map);
		
		if(nickname==true) { // 해당 중복된 아이디 없을시  true 
			return ResponseEntity.ok(true);
		}else // 해당 중복된 아이디 있을시 false
			return ResponseEntity.ok(false);
		
	}
	// 아이디 찾기
	@GetMapping("/user/find/id")
	public ResponseEntity<Integer> findUserId(@RequestParam String user_email) throws Exception {
		Integer result = userService.emailDuplicateCheck(user_email);
		if(result==1) {
			Integer userType=userService.snsUserDivision(user_email);
			return ResponseEntity.ok(userType);
		}else {
		return ResponseEntity.ok(result);
		}
	}
	
	// 패스워드 찾기 
	@GetMapping("/user/find/password")
	public ResponseEntity<Integer> findUserPassword(@RequestParam String user_email) throws Exception {
		Integer result = userService.emailDuplicateCheck(user_email);
		if(result==1) {
			Integer userType=userService.snsUserDivision(user_email);
			if(userType!=2 || userType!=4) {
				result = userService.findUserPassword(user_email);
				return ResponseEntity.ok(result);
			}else {
			return ResponseEntity.ok(userType); //sns 로만 가입되어있는 유저는 비밀번호 변경 불가능 
			}
		}else {
		return ResponseEntity.ok(result); // 없는 이메일의 경우
		}
	}
	@PostMapping("/user/change/password")
	public void changeUserPassword(@RequestBody UserDto userDto) throws Exception {
		userService.changePassword(userDto);
	}
	@GetMapping("/user/info")
	public ResponseEntity<Map<String, String>>  userInfoLaod(@RequestParam String user_email) throws Exception {
		 Map<String, String> map = userService.userInfoLoad(user_email);
		 String user_id = user_email;
		 Integer point = userService.pointFind(Integer.parseInt(map.get("user_id")));
		 map.put("point",String.valueOf(point));
//		Map<String, String> map = userService.myPageInfoLoad(user_email);
		return ResponseEntity.ok(map);
	}
	
	//유저 기본정보 변경 (닉네임, 사진, 전화번호, 관심사 )
	@PostMapping("/user/info/change")
	public void userInfoChange(@RequestBody Map <String, String> map) throws Exception {
				System.out.println(map);
				map.get("user_email");
		userService.userInfoChage(map);
		
	}
	@GetMapping("/user/oauth2/kakao/logout")
	public void kakaoLogout() throws Exception {
		
	}
			
}