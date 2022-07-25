package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.ProjectRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardDto;
import com.wowdiz.finalproj.dto.RewardOptionDto;

@Mapper
public interface RewardMapper {
//	public Map<Integer, List<RewardDto>> selectRewardMap(String project_id);
	public List<RewardAndRewardOptionDto> selectRewardResultMap(String project_id);
	public List<ProjectRewardOptionDto> selectProjectResultMap(String project_id);
	public List<RewardDto> selectReward(String project_id);
	public List<RewardOptionDto> selectRewardOption(String project_id, String reward_id);

}
