package com.wowdiz.finalproj.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.NoticeDto;
import com.wowdiz.finalproj.service.NoticeService;


@RestController
@CrossOrigin
@RequestMapping("/notice")
public class NoticeController {
	private final NoticeService noticeService;

	public NoticeController(NoticeService noticeService) {
		
		this.noticeService = noticeService;
	}
	
	@GetMapping("/list")
	public List<NoticeDto> noticeList() {
		System.out.println(noticeService.noticeList());
		return noticeService.noticeList();
	}
	
	
}
