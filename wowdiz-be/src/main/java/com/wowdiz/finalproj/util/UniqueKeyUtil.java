package com.wowdiz.finalproj.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.stereotype.Component;

import com.wowdiz.finalproj.mapper.UniqueKeyMapper;

@Component
public class UniqueKeyUtil {
	private final UniqueKeyMapper uniqueKeyMapper;

	public UniqueKeyUtil(UniqueKeyMapper uniqueKeyMapper) {
		this.uniqueKeyMapper = uniqueKeyMapper;
	}

	public String generateUniqueKey(String tableName) {
		String column = tableName+"_id";

		//I,J,O,U,V 제외
		String[] chArr = {"A","B","C","D","E","F","G","H","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"};
		StringBuffer sb = new StringBuffer(7);
		SimpleDateFormat sdf = new SimpleDateFormat("yyMMddHHmm");
		
		String generatedKey = "";
		
		while(true) {
			//문자,숫자 조합의 7자리 랜덤 문자열 생성
			for(int i = 0; i<7; i++){
				if(i%2==0)
					sb.append(new Random().nextInt(8)+1);// 0은 제외
				else 
					sb.append(chArr[new Random().nextInt(chArr.length)]);
			}

			generatedKey = sdf.format(new Date()) + sb.toString();
			Map<String, String> map = new HashMap<>();
			map.put("generatedKey", generatedKey);
			map.put("column", column);
			map.put("table", tableName);

			if(uniqueKeyMapper.isAlreadyExist(map)==0) {
				break;
			} else {
				System.out.println("duplicated unique key!!");
				sb.delete(0, sb.length());
			}
		}

		//서비스로 굳이 묶어줘야하나?
		String autoIncrementValue = uniqueKeyMapper.selectUniqueKey(column);
		uniqueKeyMapper.increaseUniqueKey(column);

		generatedKey+=autoIncrementValue;

		sb.delete(0, sb.length());
		return generatedKey;
	}

}


