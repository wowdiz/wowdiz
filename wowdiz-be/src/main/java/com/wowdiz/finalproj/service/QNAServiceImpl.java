package com.wowdiz.finalproj.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.wowdiz.finalproj.dto.AuthenticationDto;
import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.mapper.QNAMapper;
import com.wowdiz.finalproj.util.PagingHandler;

@Service
public class QNAServiceImpl implements QNAService {

	private final QNAMapper qnaMapper;
	
	public QNAServiceImpl(QNAMapper qnaMapper){
		this.qnaMapper = qnaMapper;
	}
	
	@Override
	public List<QNADto> qnalist() {
		
		return qnaMapper.qnalist();
	}
	
	@Override
	public Map<String, Object> qnaPaging(Integer currentPage) {

		Integer totalCount = qnaMapper.qnatotalpage();
		Integer perPage = 5; 
		Integer perBlock = 5;
		Integer no = totalCount-(currentPage-1)*perPage;
		
		PagingHandler pagingHandler = new PagingHandler(totalCount, currentPage, perPage, perBlock);
		
//		Integer startNum = pagingHandler.getStartNum();
		Map<String, Integer> map1 = new HashMap<>();
		map1.put("startNum",pagingHandler.getStartNum());
		map1.put("perPage",perPage);
		map1.put("no",no);

		List<QNADto> list = qnaMapper.qnapaging(map1);
		
		Map<String, Object> map = pagingHandler.paging(list);
		return map;
	}
	
	@Override
	public Integer qnatotalpage() {
		
		return qnaMapper.qnatotalpage();
	}
	@Override
	public void qnacreate (QNADto dto) {
		
		qnaMapper.qnacreate(dto);	
	}
	
	@Override
	public QNADto qnadetail(Integer inquiry_id) {
		return qnaMapper.qnadetail(inquiry_id);
	}
	
	@Override
	public QNADto qnaanswer(Integer inquiry_id) {
		return qnaMapper.qnaanswer(inquiry_id);
	}
	
	@Override
	public void qnadelete(Integer inquiry_id){
		qnaMapper.qnadelete(inquiry_id);
	}
	
	@Override
	public void qnastatus(Map<String, String> map) {
		QNADto dto = new QNADto();
		Integer s = Integer.parseInt(map.get("inquiry_status"));
		Integer i = Integer.parseInt(map.get("inquiry_id"));
		dto.setInquiry_status(s);
		dto.setInquiry_id(i);
		
		qnaMapper.qnastatus(dto);
	}
	
}
