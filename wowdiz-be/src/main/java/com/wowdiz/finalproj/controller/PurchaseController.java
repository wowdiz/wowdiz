package com.wowdiz.finalproj.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.ProjectRewardOptionDto;
import com.wowdiz.finalproj.dto.PurchaseSupporterInfoDto;
import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.UserAddressDto;
import com.wowdiz.finalproj.dto.UserDto;
import com.wowdiz.finalproj.service.PurchaseService;
import com.wowdiz.finalproj.service.RewardService;
import com.wowdiz.finalproj.service.UserService;
import com.wowdiz.finalproj.util.UniqueKeyUtil;

@RestController
@CrossOrigin
@RequestMapping("/purchase")
public class PurchaseController {
	
	private final RewardService rewardService;
	private final UniqueKeyUtil uniqueKeyGenerator;
	private final UserService userService;
	private final PurchaseService purchaseService;
	
	PurchaseController(RewardService rewardService,UniqueKeyUtil uniqueKeyGenerator, UserService userService, PurchaseService purchaseService){
		this.rewardService = rewardService;
		this.uniqueKeyGenerator = uniqueKeyGenerator;
		this.userService = userService;
		this.purchaseService = purchaseService;
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/getRewards")
	public ResponseEntity<List<ProjectRewardOptionDto>> getRewards(@RequestBody String project_id){
		List<RewardAndRewardOptionDto> list = rewardService.selectRewardResultMap(project_id);
		return ResponseEntity.ok(rewardService.selectProjectResultMap(project_id));
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/getSupporterInfo")
	public ResponseEntity<Map<String, Object>> getSupporterInfo(){
		Map<String, Object> map = new HashMap<>();
		
		UserDto userDto = userService.getUserWithAuthorities().get();
		
		List<UserAddressDto> userAddressList = userService.selectMyParcelAddress();
		map.put("userAddress", userAddressList);
		
		PurchaseSupporterInfoDto purchaseSupporterInfoDto = purchaseService.selectPurchaseSupporterInfo(userDto.getUser_id());
		map.put("supporterInfo", purchaseSupporterInfoDto);
		
		return ResponseEntity.ok(map);
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/getParcelAddress")
	public ResponseEntity<List<UserAddressDto>> getMyParcelAddress(){
		List<UserAddressDto> userAddressList = userService.selectMyParcelAddress();
		return ResponseEntity.ok(userAddressList);
	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/createPurchaseId")
	public ResponseEntity<String> createPurchaseId(){
		return ResponseEntity.ok(uniqueKeyGenerator.generateUniqueKey("purchase"));
	}
	
}
