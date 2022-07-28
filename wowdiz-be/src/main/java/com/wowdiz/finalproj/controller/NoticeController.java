package com.wowdiz.finalproj.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wowdiz.finalproj.dto.NoticeDto;
import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.service.NoticeService;


@RestController
@CrossOrigin
@RequestMapping("/notice")
public class NoticeController {
	private final NoticeService noticeService;

	public NoticeController(NoticeService noticeService) {
		
		this.noticeService = noticeService;
	}
	
	//게시물 리스트 출력
//	@GetMapping("/list")
//	public List<NoticeDto> noticeList() {
////		System.out.println(noticeService.noticeList());
//		return noticeService.noticeList();
//	}
	@PostMapping("/page")
	public Map<String, Object> qnaPaging(@RequestParam(defaultValue = "1") Integer currentPage){
		System.out.println("ddd"+currentPage);
		return noticeService.noticePaging(currentPage);
	}
	
	
	
	//게시물 업데이트 폼 정보 
	@PostMapping("/update")
	public void qnaanswer(@RequestBody NoticeDto dto) {
		
		noticeService.noticUpdate(dto);

	}

	//게시물 읽기
	@GetMapping("/noticedetail")
	public NoticeDto noticedetail(@RequestParam Integer notice_id) {
		return noticeService.noticedetail(notice_id);
	}	
	
	//게시물 등록
	@PostMapping("/noticecreate")
	public void noticeCreate(@RequestBody NoticeDto dto) {
//		System.out.println(dto);
		noticeService.noticeCreate(dto);
	}
	
	@GetMapping("/delete")
	public void noticeDelete(Integer notice_id) {
		noticeService.noticeDelete(notice_id);
	}
	
	
	@PostMapping("/uploadFile")
	   public String uploadFiles(
			   @RequestParam MultipartFile uploadFile,
			   HttpServletRequest request) {
		   
			//파일명
			String fileName = uploadFile.getOriginalFilename();
			
			//업로드할 폴더 위치
			String path = request.getServletContext().getRealPath("/save");
			
			//직전에 업로드한 이미지 삭제하기
			File file = new File(path + "/" + fileName);
			//만약 존재할 경우 삭제
			if(file.exists()) {
				file.delete();
			}
			
			//save 폴더에 업로드
			try {
				uploadFile.transferTo(new File(path + "/" + fileName));
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
			System.out.println("fileName============"+fileName);
			return fileName;
	   }
	
}
