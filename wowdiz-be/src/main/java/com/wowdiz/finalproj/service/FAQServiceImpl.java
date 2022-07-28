package com.wowdiz.finalproj.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.mapper.FAQMapper;
import com.wowdiz.finalproj.util.PagingHandler;

@Service
public class FAQServiceImpl implements FAQService {
	
	private final FAQMapper faqMapper;

	public FAQServiceImpl(FAQMapper faqMapper){
		this.faqMapper = faqMapper;
	}
	
//	@Override
//	public List<FAQDto> faqlist() {
//		
//		return faqMapper.faqlist();
//	}
	
	@Override
	public List <FAQDto> faqGetData() {
		
		return faqMapper.selectFaqList();
	}
	
	@Override
	public List<FAQDto> selectAddFaqList(Integer startNum) {
		return faqMapper.selectAddFaqList(startNum);
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
	
	@Override
	public Integer faqtotalpage() {
		return faqMapper.faqtotalpage();
	}

}