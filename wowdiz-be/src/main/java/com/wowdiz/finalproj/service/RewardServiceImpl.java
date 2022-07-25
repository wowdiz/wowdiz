package com.wowdiz.finalproj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.wowdiz.finalproj.dto.ProjectRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardDto;
import com.wowdiz.finalproj.dto.RewardOptionDto;
import com.wowdiz.finalproj.mapper.RewardMapper;

@Service
public class RewardServiceImpl implements RewardService{
	
	private final RewardMapper rewardMapper;
	private final ObjectMapper objMapper;
	
	public RewardServiceImpl(RewardMapper rewardMapper, ObjectMapper objMapper) {
		this.rewardMapper = rewardMapper;
		this.objMapper = objMapper;
	}

	@Override
	public List<RewardAndRewardOptionDto> selectRewardResultMap(String project_id) {
		
		return rewardMapper.selectRewardResultMap(project_id);
	}

	@Override
	public List<ProjectRewardOptionDto> selectProjectResultMap(String project_id) {
		
		return rewardMapper.selectProjectResultMap(project_id);
	}
	
	@Override
	public List<RewardDto> selectReward(String project_id) {
		return rewardMapper.selectReward(project_id);
	}

	@Override
	public List<RewardOptionDto> selectRewardOption(String project_id, String reward_id) {
		return rewardMapper.selectRewardOption(project_id, reward_id);
	}
}
