package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import com.wowdiz.finalproj.dto.QNADto;

public interface QNAService {
	public List <QNADto> qnalist();
	public Map<String, Object> qnaPaging(Integer currentPage);
	public Integer qnatotalpage();
	public void qnacreate (QNADto dto);
	public QNADto qnadetail(Integer inquiry_id);
	public QNADto qnaanswer (Integer inquiry_id);
	public void qnadelete(Integer inquiry_id);
}
