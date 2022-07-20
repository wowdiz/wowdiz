package com.wowdiz.finalproj.dto;

import java.sql.Date;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("WowPointHistoryDto")
public class WowPointHistoryDto {

	private Integer user_id;
	private Integer point_history_id;
	private Integer point_amount;
	private String proccess_type;
	private Date reg_date;
	
}
