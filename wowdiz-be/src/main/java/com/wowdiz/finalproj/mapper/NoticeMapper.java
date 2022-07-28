package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.NoticeDto;


@Mapper
public interface NoticeMapper {
	
	public List<NoticeDto> noticeAllSelect();
	public NoticeDto noticeDetail (Integer notice_id);
	public Integer noticeTotalSelect();
	public void noticeCreate (NoticeDto dto);
	public void noticeDelete (Integer notice_id);
	public void noticeUpdate (NoticeDto dto);
	public List<NoticeDto> noticePagingSelect(Map<String, Integer> map);

}
