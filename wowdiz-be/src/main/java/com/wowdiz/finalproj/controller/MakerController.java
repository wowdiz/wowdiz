package com.wowdiz.finalproj.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.service.MakerService;

@RestController
@RequestMapping("/maker")
public class MakerController {
   private final MakerService makerService;
   
   public MakerController(MakerService makerService) {
	   this.makerService = makerService;
   }
   
   @PostMapping("/insertMakerProject")
   public void insertMakerProject(@RequestBody Map<String, Object> map) {
	   System.out.println("map : " + map);
	   makerService.insertMakerProject(map);
   }
   
  
}