package com.wowdiz.finalproj.service;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wowdiz.finalproj.dto.IamPortTokenDto;

@Service
public class IamPortServiceImpl implements IamPortService {
	private final String imp_key;
	private final String imp_secret;

	public IamPortServiceImpl(
			@Value("${iamportAPI.imp_key}") String imp_key,
			@Value("${iamportAPI.imp_secret}") String imp_secret) {
		this.imp_key = imp_key;
		this.imp_secret = imp_secret;
	}

	@SuppressWarnings("unchecked")
	public String getIAmPortToken() {

		JSONObject body=new JSONObject();
		body.put("imp_key", imp_key);
		body.put("imp_secret", imp_secret);

		//Header
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type","application/json");

		//Body + Header
		HttpEntity<JSONObject> entity = new HttpEntity<>(body , headers);

		//HTTP요청 보내주는 객체
		RestTemplate rt = new RestTemplate();

		ResponseEntity<String> response = rt.exchange(
				"https://api.iamport.kr/users/getToken", //{요청할 서버 주소}
				HttpMethod.POST, //{요청할 방식}
				entity, // {요청할 때 보낼 데이터}
				String.class //{요청시 반환되는 데이터 타입}
				);

		IamPortTokenDto token = null;

		try {
			ObjectMapper objMapper = new ObjectMapper();
			token = objMapper.readValue(response.getBody(), IamPortTokenDto.class);

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}

		System.out.println(response.getBody());
		return token.getResponse().get("access_token");
	}

	public String initSchedulePay(JSONObject jsonObj) {
		String access_token = getIAmPortToken();

		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Type","application/json");
		headers.add("Authorization", "Bearer "+access_token);

		HttpEntity<JSONObject> entity = new HttpEntity<>(jsonObj, headers);
		System.out.println(entity);
		RestTemplate rt = new RestTemplate();
		ResponseEntity<String> response = rt.exchange(
				"https://api.iamport.kr/subscribe/payments/schedule",
				HttpMethod.POST,
				entity,
				String.class
				);
		System.out.println(response.getBody());
		return response.getBody();
	}

	public Integer convertToUnixTimestamp(String normalTime) {
		long unix = 0;
		try {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			System.out.println("sdf = " + sdf.parse(normalTime));
			Date date = sdf.parse(normalTime);
			unix = date.getTime()+3600;//close_date로부터 한시간 후
		} catch (Exception e) {
			e.printStackTrace();
		}
		return (int)(unix/1000);

	}
}
