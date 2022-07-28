package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.dto.QNADto;


@Mapper
public interface FAQMapper {
	
//	public List <FAQDto> faqlist();

	public void faqcreate (FAQDto dto);
	public FAQDto faqdetail (Integer faq_id);
	public void faqdelete (Integer faq_id);	
	public void faqupdate (FAQDto dto);
	public Integer faqtotalpage ();
	public List<FAQDto> selectFaqList ();
	public List<FAQDto> selectAddFaqList (Integer startNum);
}

