package com.wowdiz.finalproj.service;

import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

public interface EmailService {
	// 이메일 보내기

	public String sendSimpleMessage(String user_email)throws Exception;
	
	public String sendFaqAnswerMessage(Map<String, String> map) throws Exception; 
}
