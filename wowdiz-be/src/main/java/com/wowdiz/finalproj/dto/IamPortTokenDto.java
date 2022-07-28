package com.wowdiz.finalproj.dto;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class IamPortTokenDto {
	private String code;
	private String message;
	private Map<String,String> response;
}
