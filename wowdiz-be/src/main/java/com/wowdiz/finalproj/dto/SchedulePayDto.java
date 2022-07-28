package com.wowdiz.finalproj.dto;

import java.util.List;

import lombok.Data;

@Data
public class SchedulePayDto {
	private String buyer_email;
	private Integer amount;
	private String schedule_at;
	private String name;
	private String buyer_name;
	private String buyer_phone;
	private String merchant_uid;
	@Override
	public String toString() {
		return "buyer_email=" + buyer_email + ", amount=" + amount + ", schedule_at=" + schedule_at
				+ ", name=" + name + ", buyer_name=" + buyer_name + ", buyer_phone=" + buyer_phone + ", merchant_uid="
				+ merchant_uid;
	}
}
