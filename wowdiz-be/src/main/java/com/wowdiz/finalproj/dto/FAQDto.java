package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Alias("FAQDto")
@Data
public class FAQDto {
	
	private Integer faq_id;
	private String faq_title;
	private String faq_content;
	private String view_count;
	private Integer startNum;
	private Integer perPage;

}
