package com.wowdiz.finalproj.service;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.TestDto;
import com.wowdiz.finalproj.mapper.TestMapper;

@Service
public class TestServiceImpl implements TestService{
	private final TestMapper testMapper;
	
	//생성자 주입 방식. @Autowired 생략 가능.
	public TestServiceImpl(TestMapper testMapper){
		this.testMapper = testMapper;
	}
	
	public TestDto selectTest() {
		return testMapper.selectTest();
	}	
}
