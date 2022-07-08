package com.wowdiz.finalproj.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

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
	
	private String user_name;
	
	private String user_phone;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date user_birthday;
	
	private String user_gender;
	
	private String profile_picture;
	
	private Date reg_date;
	
	private Date modified_date;
	
	private String sns_type;
	
	private String sns_id;
	
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
