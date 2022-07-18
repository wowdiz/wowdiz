package com.wowdiz.finalproj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.QNADto;
import com.wowdiz.finalproj.mapper.QNAMapper;

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
}
