package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import com.wowdiz.finalproj.dto.NoticeDto;

public interface NoticeService {

	public List<NoticeDto> noticeList();
	public NoticeDto noticedetail(Integer notice_id);
	public Integer noticeTotal();
	public Map<String, Object> noticePaging(Integer currentPage);
	public void noticeCreate (NoticeDto dto);
	public void noticeDelete (Integer notice_id);
	public void noticUpdate (NoticeDto dto);
}
