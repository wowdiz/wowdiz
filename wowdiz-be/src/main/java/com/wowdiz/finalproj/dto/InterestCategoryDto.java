package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("InterestCategoryDto")
public class InterestCategoryDto {
	private Integer user_id;
	private String category_id;
}
