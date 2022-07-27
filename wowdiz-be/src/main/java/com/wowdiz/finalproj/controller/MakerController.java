package com.wowdiz.finalproj.controller;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wowdiz.finalproj.service.MakerService;
import com.wowdiz.finalproj.util.FileNameConverter;

@RestController
@CrossOrigin
@RequestMapping("/maker")
public class MakerController {
   private final MakerService makerService;
   
   public MakerController(MakerService makerService) {
	   this.makerService = makerService;
   }
   
   String photoName = "";
   
   @PostMapping("/insertMakerProject")
   public void insertMakerProject(@RequestBody Map<String, Object> map) {
	   System.out.println("map : " + map);
	   makerService.insertMakerProject(map);
   }
   
   @PostMapping("/uploadFiles")
   public String uploadFiles(
		   @RequestParam MultipartFile uploadFile,
		   HttpServletRequest request) {
	   
		//파일명
		String fileName = uploadFile.getOriginalFilename();
		
		//업로드할 폴더 위치
		String path = request.getServletContext().getRealPath("/save");
		
		//직전에 업로드한 이미지 삭제하기
		File file = new File(path + "/" + photoName);
		System.out.println("업로드 하자마자 fileName = " + fileName);
		//만약 존재할 경우 삭제
		if(file.exists()) {
			file.delete();
		}
		
		//파일명 변경
		FileNameConverter FileNameConverter = new FileNameConverter();
		photoName = FileNameConverter.changeFileName(fileName);
		System.out.println("최종 저장된 fileName = " + fileName + "->" + photoName);
		
		//save 폴더에 업로드
		try {
			uploadFile.transferTo(new File(path + "/" + photoName));
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		System.out.println("photoName = " + photoName);
		return photoName;
   }
}