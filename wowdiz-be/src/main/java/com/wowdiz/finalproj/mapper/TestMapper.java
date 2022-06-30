package com.wowdiz.finalproj.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.TestDto;

@Mapper
public interface TestMapper {
	public TestDto selectTest();
}
