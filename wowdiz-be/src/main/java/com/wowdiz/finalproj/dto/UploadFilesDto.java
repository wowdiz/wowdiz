package com.wowdiz.finalproj.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Alias("UploadFilesDto")
@Data
public class UploadFilesDto {
	Integer upload_id;
	Integer user_id;
	String original_file_name;
	String upload_file_name;
	String file_type;
	String upload_path;
	String upload_date;
	long fileSize;
	
//	public UploadFilesDto(String upload_id, String original_file_name, String upload_file_name, long fileSize) {
//		this.upload_id = upload_id;
//		this.original_file_name = original_file_name;
//		this.upload_file_name = upload_file_name;
//		this.fileSize = fileSize;
//	}
}

