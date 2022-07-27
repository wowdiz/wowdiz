package com.wowdiz.finalproj.dto;

import java.sql.Timestamp;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Alias("EventDto")
@Data
public class EventDto {
	private Integer event_id;
	private String event_title;
	private String event_content;
	private Integer view_count;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Timestamp write_date;
	private String event_start_date;
	private String event_end_date;
	private String event_status;

}
