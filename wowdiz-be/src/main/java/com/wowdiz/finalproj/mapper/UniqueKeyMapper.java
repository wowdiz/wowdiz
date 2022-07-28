package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.ProjectRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardAndRewardOptionDto;
import com.wowdiz.finalproj.dto.RewardDto;
import com.wowdiz.finalproj.dto.RewardOptionDto;

@Mapper
public interface UniqueKeyMapper {
	public String selectUniqueKey(String column);
	public void increaseUniqueKey(String cokumn);
	public Integer isAlreadyExist(Map<String, String> map);
}
