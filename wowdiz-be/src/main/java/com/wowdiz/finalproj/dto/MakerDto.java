package com.wowdiz.finalproj.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("MakerDto")
@Data
public class MakerDto {
	//project table
	private String project_name;
	private Integer targtet_amount;
	private String project_story;
	private String project_keyword;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
	private Timestamp close_date;
	
	//project_reward table
	private Integer reward_price;
	private String reward_title;
	private String reward_info;
	private Integer purchase_limit;
	private String require_parcel;
	
	//project_reward_option table
	private String reward_option_name;
	private String reward_option_detail;
	private String reward_option_type;
}
