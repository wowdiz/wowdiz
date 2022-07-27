package com.wowdiz.finalproj.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.mapper.FAQMapper;
import com.wowdiz.finalproj.service.EmailService;
import com.wowdiz.finalproj.service.FAQService;

import ch.qos.logback.core.util.SystemInfo;


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
	
	@GetMapping("/faqpage")
	public List<FAQDto> faqPaging () {
		return faqService.faqGetData();
	}
	
	@GetMapping("/addfaqpage")
	public List<FAQDto> addFaqPage (Integer startNum) {
		System.out.println("startNum : " + startNum);
		return faqService.selectAddFaqList(startNum);
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
	
	@GetMapping("/faqupdate")
	public void faqupdateform (@RequestBody FAQDto dto) {
		
		faqService.faqupdate(dto);
	}
}
