package com.wowdiz.finalproj.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.QNADto;

@Mapper
public interface QNAMapper {
	
	public List <QNADto> qnalist();
	public void qnacreate (QNADto dto);
	public QNADto qnadetail (Integer inquiry_id);
	public QNADto qnaanswer (Integer inquiry_id);
	public void qnadelete (Integer inquiry_id);
	
}

