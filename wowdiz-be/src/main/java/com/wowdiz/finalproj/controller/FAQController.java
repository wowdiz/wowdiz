package com.wowdiz.finalproj.controller;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.namedparam.ParsedSql;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.service.FAQService;
import com.wowdiz.finalproj.service.QNAService;

@RestController
@CrossOrigin
@RequestMapping("/supportboard")
public class FAQController {
	
	private final FAQService faqService;

	public FAQController(FAQService faqService) {
		
		this.faqService = faqService;
	}
		
//	@RequestMapping("/faq")
//	public List <FAQDto> faqlist() {
//		System.out.println(faqService.faqlist());
//		return faqService.faqlist();
//		
//	}
	
	@PostMapping("/faqpage")
	public Map<String, Object> faqPaging(@RequestParam(defaultValue = "1") Integer currentPage){
		System.out.println("ddd"+currentPage);
		return faqService.faqPaging(currentPage);
	}
	
	@PostMapping("/faqwrite")
	public void faqcreate(@RequestBody FAQDto dto) {	
		faqService.faqcreate(dto);
	}
	
	@GetMapping("/faqdetail")
	public FAQDto faqdetail(@RequestParam Integer faq_id) {
//		System.out.println(inquiry_id);
		return faqService.faqdetail(faq_id);
	}
	
	@GetMapping("/faqdelete")
	public void faqdetele(Integer faq_id) {
		System.out.println(faq_id);
		faqService.faqdelete(faq_id);
	}
	
	@PostMapping("/faqupdate")
	public void faqupdateform (@RequestBody FAQDto dto) {
		
		faqService.faqupdate(dto);
	}
//	
//	@PostMapping("/faqupdate")
//	public void faqupdate (FAQDto dto) {
//		faqService.faqupdate(dto);
//	}
}
