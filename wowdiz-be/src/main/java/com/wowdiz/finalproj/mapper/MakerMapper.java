package com.wowdiz.finalproj.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.MakerDto;

@Mapper
public interface MakerMapper {
	public void insertMakerProject(MakerDto dto);
	public void insertMakerProjectReward(MakerDto dto);
	public void insertMakerProjectRewardOption(MakerDto dto);
}
