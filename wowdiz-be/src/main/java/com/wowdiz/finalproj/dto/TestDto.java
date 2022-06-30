package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Alias("TestDto")
@Data
public class TestDto {
	private String aaa;
	private String bbb;
}
