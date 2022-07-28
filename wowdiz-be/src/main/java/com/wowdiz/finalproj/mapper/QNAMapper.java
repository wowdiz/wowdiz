package com.wowdiz.finalproj.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.QNADto;

@Mapper
public interface QNAMapper {
	
	public List <QNADto> qnalist();
	public List<QNADto> qnapaging(Map<String, Integer> map1);
	public void qnacreate (QNADto dto);
	public QNADto qnadetail (Integer inquiry_id);
	public QNADto qnaanswer (Integer inquiry_id);
	public void qnadelete (Integer inquiry_id);
	public Integer qnatotalpage();
	public void qnastatus(QNADto dto);
	
}

