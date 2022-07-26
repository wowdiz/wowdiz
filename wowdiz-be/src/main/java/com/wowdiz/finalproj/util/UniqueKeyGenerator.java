package com.wowdiz.finalproj.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.springframework.stereotype.Component;
import com.wowdiz.finalproj.mapper.UniqueKeyMapper;

@Component
public class UniqueKeyGenerator {
	private final UniqueKeyMapper uniqueKeyMapper;
	
	public UniqueKeyGenerator(UniqueKeyMapper uniqueKeyMapper) {
		this.uniqueKeyMapper = uniqueKeyMapper;
	}
	
	public String generateUniqueKey(String type) {
		//I,J,O,U,V 제외
		String[] chArr = {"A","B","C","D","E","F","G","H","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"};
		StringBuffer sb = new StringBuffer(7);
		SimpleDateFormat sdf = new SimpleDateFormat("yyMMddHHmm");
		String autoIncrementValue = uniqueKeyMapper.selectUniqueKey(type);
		uniqueKeyMapper.increaseUniqueKey(type);

		//문자,숫자 조합의 7자리 랜덤 문자열 생성
		for(int i = 0; i<7; i++){
			if(i%2==0)
				sb.append(new Random().nextInt(8)+1);// 0은 제외
			else 
				sb.append(chArr[(int)(Math.random()*chArr.length)]);
		}
		
		String generatedKey = sdf.format(new Date()) + sb + autoIncrementValue;
		sb.delete(0, sb.length());
		return generatedKey;
	}

}


