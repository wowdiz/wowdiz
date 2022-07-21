package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("RewardOptionDto")
public class RewardOptionDto {
	private String reward_option_id;
	private String project_id;
	private String reward_id;
	private String reward_option_name;
	private String reward_option_detail;
	private String reward_option_type;

}
