package com.wowdiz.finalproj.dto;

import java.sql.Date;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
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
	
	private Integer user_id;
	
	@NotNull
	@Size(min = 6, max=50)
	@Pattern(regexp = "/^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\\.[a-zA-Z]{2,3}$/i")
	private String user_email;
	
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@NotNull
	@Size(min = 6, max=50)
	@Pattern(regexp = "/^(?=.*\\d)(?=.*[a-zA-ZS]).{6,}/")
	private String user_password;
	
	@NotNull
	@Size(min = 2, max=12)
	@Pattern(regexp = "/^([가-힣])|([a-zA-Z])$/")
	private String user_name;
	
	@NotNull
	@Size(min = 2, max=15)
	@Pattern(regexp = "/^01([0|1|6|7|8|9]{0}).([-])([0-9]{2,3}).([-])([0-9]{4})$/")
	private String user_phone;
	
	@NotNull
	@Pattern(regexp = "/^yyyy-MM-dd$/")
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date user_birthday;
	
	@NotNull
	@Pattern(regexp = "/^([M|F]{1})$/")
	private String user_gender;
	
	private String profile_picture;
	
	private Date create_date;
	
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
	
	private String user_recommend;
	
}
