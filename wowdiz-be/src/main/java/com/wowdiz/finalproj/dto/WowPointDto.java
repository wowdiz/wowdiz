package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("WowPointDto")
public class WowPointDto {
	private String user_id;
	private Integer current_wowpoint;
}
