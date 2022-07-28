package com.wowdiz.finalproj.dto;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("ProjectRewardOptionDto")
public class ProjectRewardOptionDto {
	private String project_id;
	private String project_name;
	private String open_date;
	private String close_date;
	private String delivery_date;
	private List<RewardDto> rewardList;
}
