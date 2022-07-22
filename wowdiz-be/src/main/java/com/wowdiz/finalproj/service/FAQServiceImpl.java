package com.wowdiz.finalproj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.mapper.FAQMapper;

@Service
public class FAQServiceImpl implements FAQService {
	
	private final FAQMapper faqMapper;

	public FAQServiceImpl(FAQMapper faqMapper){
		this.faqMapper = faqMapper;
	}
	
	@Override
	public List<FAQDto> faqlist() {
		
		return faqMapper.faqlist();
	}
	
	@Override
	public void faqcreate (FAQDto dto) {
		
		faqMapper.faqcreate(dto);	
	}
	
	@Override
	public void faqdelete(Integer faq_id){
		
		faqMapper.faqdelete(faq_id);
	}

	@Override
	public FAQDto faqdetail(Integer faq_id) {
		
		return faqMapper.faqdetail(faq_id);
	}
	
	@Override
	public void faqupdate (FAQDto dto) {
		faqMapper.faqupdate (dto);
	}

}