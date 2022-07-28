package com.wowdiz.finalproj.dto;

import java.sql.Timestamp;
import java.util.Date;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("AdminDto")
@Data
public class AdminDto {
	//project table
	private Integer project_id;
	private String approved;
	private Date approved_date;
}
