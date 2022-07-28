package com.wowdiz.finalproj.service;

import org.json.simple.JSONObject;

import com.wowdiz.finalproj.dto.RequestPayDetailDto;

public interface IamPortService {
	public String getIAmPortToken();
	public Integer convertToUnixTimestamp(String normalTime);
	public String initSchedulePay(JSONObject obj);
}
