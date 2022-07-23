package com.wowdiz.finalproj.dto;

import java.sql.Date;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("RecommendationDto")
public class RecommendationDto {

	private Integer user_id;
	private Integer target_user_id;
	private Date recommend_date;
}
