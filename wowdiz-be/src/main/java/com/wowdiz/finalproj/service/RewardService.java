package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import com.wowdiz.finalproj.dto.ProjectRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardDto;
import com.wowdiz.finalproj.dto.RewardOptionDto;

public interface RewardService {
//	public List<Map<String, Object>> selectRewardMap(String project_id);
	public List<RewardAndRewardOptionDto> selectRewardResultMap(String project_id);
	public List<RewardDto> selectReward(String project_id);
	public List<RewardOptionDto> selectRewardOption(String project_id, String reward_id);
	public List<ProjectRewardOptionDto> selectProjectResultMap(String project_id);
	
}
