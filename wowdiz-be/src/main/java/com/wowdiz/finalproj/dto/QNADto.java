package com.wowdiz.finalproj.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("QNADto")
@Data
public class QNADto {
	private Integer inquiry_id;
	private String user_name;
	private String user_email;
	private String user_phone;
	private String inquiry_title;
	private String inquiry_content;
	private String inquiry_type;
	private String	 write_date;
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm")
	private Timestamp answer_date;
	private Integer inquiry_status;
	private Integer qnatotalpage;
}
