package com.wowdiz.finalproj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.NoticeDto;
import com.wowdiz.finalproj.mapper.NoticeMapper;

@Service
public class NoticeServiceImpl implements NoticeService {

	private final NoticeMapper noticeMapper;
	
	public NoticeServiceImpl (NoticeMapper noticeMapper) {
		this.noticeMapper = noticeMapper;
	}
	
	//게시물 출력
	@Override
	public List<NoticeDto> noticeList() {
		// TODO Auto-generated method stub
		return noticeMapper.noticeAllSelect();
	}

}
