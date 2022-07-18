package com.wowdiz.finalproj.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
   private String authenticationKey;
   
   public UserController(UserService userService, EmailService emailService) {
      this.userService = userService;
      this.emailService = emailService;
   }
   

   @PostMapping("/signup")
   public ResponseEntity<UserDto> signup(@Valid @RequestBody UserDto userDto) {
      return ResponseEntity.ok(userService.signup(userDto));
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
//   이메일 (ID 중복확인 및 이메일 인증번호 보내기)
   @PostMapping("/duplicateCheck")
   public ResponseEntity<String> duplicateCheck(@RequestBody Map<String, String> map ) throws Exception {
      String user_email = map.get("user_email");
      Integer confirmCheck = userService.duplicateCheck(map);
      if(user_email == "") {
         return ResponseEntity.badRequest().body("email empty");
      } else if(confirmCheck == 1) {
         return ResponseEntity.ok("cofirm");
      } else {
         Boolean authenticationCreate =userService.authenticationCreate(map);
         if(authenticationCreate==true) {
         return ResponseEntity.ok("pass");   
         } else {
            return ResponseEntity.ok("again");
         }      
      }
   }
   @PostMapping("/emailConfirm")
   public ResponseEntity<String> emailConfirm(@RequestParam String confirm){
      
      if(authenticationKey==confirm) {
         return ResponseEntity.ok("succes");   
      } else {
         return ResponseEntity.ok("fail");   
      }
   }

}