package com.wowdiz.finalproj.dto;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("RewardAndRewardOptionDto")
public class RewardAndRewardOptionDto {
	private String project_reward_id;
	private String project_id;
	private Integer project_reward_order;
	private Integer project_reward_price;
	private String project_reward_title;
	private String project_reward_info;
	private String purchase_limit;
	private boolean require_parcel;
	private String parcel_fee;
	private List<RewardOptionDto> optionList;
}
