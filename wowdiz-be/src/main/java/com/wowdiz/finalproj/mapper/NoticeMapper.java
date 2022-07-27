package com.wowdiz.finalproj.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.NoticeDto;

@Mapper
public interface NoticeMapper {
	
	//전체 게시물 얻기
	public List<NoticeDto> noticeAllSelect();

}
