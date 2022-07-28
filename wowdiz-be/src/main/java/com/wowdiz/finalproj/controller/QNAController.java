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

import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.service.EmailService;
import com.wowdiz.finalproj.service.QNAService;

@RestController
@CrossOrigin
@RequestMapping("/supportboard")
public class QNAController {
	private final QNAService qnaService;
	private final EmailService emailService;

	public QNAController(QNAService qnaService, EmailService emailService) {
		
		this.qnaService = qnaService;
		this.emailService= emailService;
	}
	
	@RequestMapping("/qnalist")
	public List <QNADto> qnalist() {
		
		return qnaService.qnalist();
	}
	
	@PostMapping("/qnapage")
	public Map<String, Object> qnaPaging(@RequestParam(defaultValue = "1") Integer currentPage){
		System.out.println("ddd"+currentPage);
		return qnaService.qnaPaging(currentPage);
		
	}
	@PostMapping("/qna")
	public void qnacreate(QNADto dto) {	
		qnaService.qnacreate(dto);
	}
	
	@GetMapping("/qnadetail")
	public QNADto qnadetail(@RequestParam Integer inquiry_id) {
//		System.out.println(inquiry_id);
		return qnaService.qnadetail(inquiry_id);
	}	
	
	@GetMapping("/qnaanswer")
	public QNADto qnaanswer(@RequestParam Integer inquiry_id) {
//		System.out.println("i"+inquiry_id);
		return qnaService.qnaanswer(inquiry_id);
	}
	
	@GetMapping("/qnadelete")
	public void qnadetele(Integer inquiry_id) {
//		System.out.println(inquiry_id);
		qnaService.qnadelete(inquiry_id);
	}
	
	@PostMapping("/qnaanswersend")
	public void qnaEmailSend (@RequestBody Map<String, String> map) throws Exception {
		System.out.println(map);
		emailService.sendFaqAnswerMessage(map);
	}

}
