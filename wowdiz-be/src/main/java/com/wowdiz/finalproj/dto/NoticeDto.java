package com.wowdiz.finalproj.dto;

import java.sql.Date;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("NoticeDto")
public class NoticeDto {
	private Integer notice_id;
	private String admin_id;
	private String notice_title;
	private String notice_content;
	private String notice_thumbnail;
	private Date write_date;
	private Integer view_count;
	private char important;
}
