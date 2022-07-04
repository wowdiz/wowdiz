package com.wowdiz.finalproj.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Alias("UserDto")
public class UserDto {
	
	private Integer seq;
	@NotNull
	@Size(min = 3, max=50)
	private String user_email;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@NotNull
	@Size(min = 3, max=50)
	private String user_pwd;
	
	@NotNull
	@Size(min = 3, max=50)
	private String user_nickname;

	@NotNull
	@Size(min = 0, max=10)	
	private String auth;

	@NotNull
	@Size(min = 0, max=10)	
	private boolean enabled;
	
	
}
