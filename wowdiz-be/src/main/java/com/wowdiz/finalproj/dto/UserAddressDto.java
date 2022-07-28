package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("UserAddressDto")
public class UserAddressDto {
	private String user_address_id;
	private Integer user_id;
	private String address_name;
	private String address;
	private String address_detail;
	private String zipcode;
}
