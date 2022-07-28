package com.wowdiz.finalproj.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.NoticeDto;
import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.mapper.NoticeMapper;
import com.wowdiz.finalproj.util.PagingHandler;

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
	
	//게시물 읽기
	@Override
	public NoticeDto noticedetail(Integer notice_id) {
		return noticeMapper.noticeDetail(notice_id);
	}
	
	//게시물 등록
	@Override
	public void noticeCreate (NoticeDto dto) {
		noticeMapper.noticeCreate(dto);
	}
	
	//게시물 삭제
	@Override
	public void noticeDelete(Integer notice_id) {
		noticeMapper.noticeDelete(notice_id);
	}

	//게시물 변경
	@Override
	public void noticUpdate(NoticeDto dto) {
		
		noticeMapper.noticeUpdate(dto);		
	}

	@Override
	public Map<String, Object> noticePaging(Integer currentPage) {

		Integer totalCount = noticeMapper.noticeTotalSelect();
		Integer perPage = 5; 
		Integer perBlock = 5;
		Integer no = totalCount-(currentPage-1)*perPage;
		
		PagingHandler pagingHandler = new PagingHandler(totalCount, currentPage, perPage, perBlock);
		
//		Integer startNum = pagingHandler.getStartNum();
		Map<String, Integer> map1 = new HashMap<>();
		map1.put("startNum",pagingHandler.getStartNum());
		map1.put("perPage",perPage);
		map1.put("no",no);

		List<NoticeDto> list = noticeMapper.noticePagingSelect(map1);
		
		Map<String, Object> map = pagingHandler.noticePaging(list);
		return map;
	}

	@Override
	public Integer noticeTotal() {
		// TODO Auto-generated method stub
		return null;
	}
}
