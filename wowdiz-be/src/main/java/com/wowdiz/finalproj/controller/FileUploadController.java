package com.wowdiz.finalproj.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Collection;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.wowdiz.finalproj.util.FileNameConverter;

@RestController
@MultipartConfig(
		location="/tmp",
		fileSizeThreshold=1024*1024,
		//maxFileSize=1024*1024*5,
		//maxRequestSize=1024*1024*5*5
				maxFileSize=99999999*9999999,
				maxRequestSize=99999999*9999999
		)
@CrossOrigin
public class FileUploadController {
//	@RequestMapping(value = "/file",
//			method = RequestMethod.POST,
//			consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
//	
//	public String fileUpload(@RequestParam("/upload") MultipartFile file, HttpServletRequest request) throws IOException {
//		String path = request.getServletContext().getRealPath("/save");
//		File convertFile = new File(
//				path+file.getOriginalFilename());
//		convertFile.createNewFile();
//		
//		FileOutputStream fout = new FileOutputStream(convertFile);
//		fout.write(file.getBytes());
//		
//		return "file/upload";
//	}
	String filename = "";
	@PostMapping("/file/upload")
	public String fileUpload(@RequestBody MultipartFile files, HttpServletRequest request, HttpServletResponse response) throws Exception {
		//파일명
//		String fileName = request.getParameter("files");
		String fileName = files.getOriginalFilename();
		System.out.println("업로드 하자마자 fileName = " + fileName);
	
		//업로드할 폴더 위치
		String path = request.getServletContext().getRealPath("/ckeditorImages");
		
		String filePath = path + File.separator + fileName;
		
		//직전에 업로드한 이미지 삭제하기
		File file = new File(filePath);
		//경로에 폴더가없으면 생성
		if(!file.exists()) file.mkdirs();
		System.out.println("업로드 하자마자 fileName = " + fileName);
		//만약 존재할 경우 삭제
		if(file.exists()) {
			file.delete();
		}
		
		//파일명 변경
		FileNameConverter FileNameConverter = new FileNameConverter();
		filename = FileNameConverter.changeFileName(fileName);
		System.out.println("최종 저장된 fileName = " + fileName + "->" + filename);
		
		//save 폴더에 업로드
		try {
			files.transferTo(new File(path + "/" + filename));
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		System.out.println("photoName = " + filename);
		return filename;
	}
	
}
