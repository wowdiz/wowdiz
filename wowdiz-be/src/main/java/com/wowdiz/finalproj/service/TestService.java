package com.wowdiz.finalproj.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.TestDto;
import com.wowdiz.finalproj.mapper.TestMapper;

public interface TestService {
	public TestDto selectTest();
}
