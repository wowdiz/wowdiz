package com.wowdiz.finalproj.service;

import java.util.List;

import com.wowdiz.finalproj.dto.FAQDto;


public interface FAQService {
	public List <FAQDto> faqlist();
	public void faqcreate (FAQDto dto);
	public FAQDto faqdetail(Integer faq_id);
	public void faqdelete(Integer faq_id);
	public void faqupdate(FAQDto dto);
}
