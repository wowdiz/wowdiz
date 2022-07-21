package com.wowdiz.finalproj.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardDto;
import com.wowdiz.finalproj.service.RewardService;

@RestController
@CrossOrigin
@RequestMapping("/purchase")
public class PurchaseController {
	
	private final RewardService rewardService;
	
	PurchaseController(RewardService rewardService){
		this.rewardService = rewardService;
	}
	
//	@PreAuthorize("hasAnyRole('USER')")
//	@PostMapping("/getRewards")
//	public ResponseEntity<List<Map<String, Object>>> getRewards(@RequestBody String project_id){
//		System.out.println("project_id:"+project_id);
//		System.out.println(rewardService.selectRewardMap(project_id));
//		return ResponseEntity.ok(rewardService.selectRewardMap(project_id));
//	}
	
	@PreAuthorize("hasAnyRole('USER')")
	@PostMapping("/getRewards")
	public ResponseEntity<List<RewardAndRewardOptionDto>> getRewards(@RequestBody String project_id){
		//List<RewardAndRewardOptionDto> list = rewardService.selectRewardResultMap(project_id);
				
		return ResponseEntity.ok(rewardService.selectRewardResultMap(project_id));
	}
}
