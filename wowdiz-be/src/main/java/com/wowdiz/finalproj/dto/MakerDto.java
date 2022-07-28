package com.wowdiz.finalproj.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("MakerDto")
@Data
public class MakerDto {
	//project table
	private Integer project_id;
	private String project_name;
	private Integer target_amount;
	private String project_summary;
	private String project_thumbnail;
	private String project_story;
	private String project_keyword;
	private String approved;
	private String approved_date;
//	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "Asia/Seoul")
//	private Timestamp close_date;
	private String close_date;
	private String open_date;
	
	//project_reward table
	private Integer project_reward_id;
	private Integer project_reward_price;
	private String project_reward_title;
	private String project_reward_info;
	private Integer purchase_limit;
	private String require_parcel;
	
	//project_reward_option table
	private String project_reward_option_name;
	private String project_reward_option_detail;
	private String project_reward_option_type;
}
