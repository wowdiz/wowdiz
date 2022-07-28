package com.wowdiz.finalproj.controller;

import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.RequestPayDetailDto;
import com.wowdiz.finalproj.dto.SchedulePayDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.service.IamPortService;
import com.wowdiz.finalproj.service.UserService;
import com.wowdiz.finalproj.util.UniqueKeyUtil;

@CrossOrigin
@RestController
@RequestMapping("/iamport")
public class IamPortController {
	private final IamPortService iamPortService;
	private final UserService userService;
	private final UniqueKeyUtil uniqueKeyUtil;
	public IamPortController(IamPortService iamPortService, UserService userService,UniqueKeyUtil uniqueKeyUtil) {
		this.uniqueKeyUtil = uniqueKeyUtil;
		this.iamPortService = iamPortService;
		this.userService = userService;
	}
	
	@GetMapping("/getIamPortToken")
	public String getIamPortToken() {
		return iamPortService.getIAmPortToken();
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/initSchedulePay")
	public String schedulePay(@RequestBody RequestPayDetailDto payDetailDto) {
		UserDto userDto = userService.getUserWithAuthorities().get();
		
		String merchant_id = uniqueKeyUtil.generateUniqueKey("purchase");
		Integer unixTime = iamPortService.convertToUnixTimestamp(payDetailDto.getClose_date());
		JSONArray jsonArr = new JSONArray();
		JSONObject jsonObj = new JSONObject();
		jsonObj.put("merchant_uid", merchant_id);
		jsonObj.put("schedule_at", unixTime);
		jsonObj.put("amount", payDetailDto.getFinal_price());
		jsonObj.put("name", payDetailDto.getProject_name());
		jsonObj.put("buyer_name", userDto.getUser_name());
		jsonObj.put("buyer_phone", userDto.getUser_phone());
		jsonObj.put("buyer_email", userDto.getUser_email());
		jsonArr.add(jsonObj);
		
		JSONObject obj = new JSONObject();
		obj.put("customer_uid", userDto.getUser_id());
		obj.put("schedules", jsonArr);
		
		return iamPortService.initSchedulePay(obj);
	}
	
}
