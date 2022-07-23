package com.wowdiz.finalproj.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.UserDto;

@RestController
@RequestMapping("/maker")
public class MakerController {
   
//   private final UserService userService;
//   
//   public MakerController(UserService userService) {
//      this.userService = userService;
//   }
   

   @PostMapping("/insertMakerProject")
   public void insertMakerProject(@RequestBody Map<String, Object> map) {
	   System.out.println("map : " + map);
   }
}