package com.wowdiz.finalproj.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.TestDto;
import com.wowdiz.finalproj.service.TestService;

@RestController
@CrossOrigin
public class HomeController {
	private final TestService testService;
	
	public HomeController(TestService testService) {
		this.testService = testService;
	}
	
	@RequestMapping("/")
	public TestDto home() {
		TestDto testDto = testService.selectTest();
		System.out.println(testDto);
		return testDto;
		
	}
}
