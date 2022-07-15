package com.wowdiz.finalproj.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Alias("LoginDto")
public class LoginDto {
	@NotNull
	@Size(min = 3, max = 50)
	private String user_email;
	
	@NotNull
	@Size(min = 3, max = 100)
	private String user_pwd;
}
