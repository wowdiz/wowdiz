package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("PurchaseSupporterInfoDto")
public class PurchaseSupporterInfoDto {
	private String user_id;
	private String user_email;
	private String user_name;
	private String user_phone;
	private Integer current_wowpoint;
}
