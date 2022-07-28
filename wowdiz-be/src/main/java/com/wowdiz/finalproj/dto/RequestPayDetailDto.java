package com.wowdiz.finalproj.dto;

import java.util.List;

import lombok.Data;


//선택한 상품들에 대한 모든 정보.
//merchant_uid
//원가
//포인트
//배송지
//구매한 회원 정보
//수령자
//연락처
//배송요청사항
@Data
public class RequestPayDetailDto {
	String project_id;
	String project_name;
	List<RewardDto> rewards;
	Integer total_price;
	String total_qty;
	String close_date;
	String open_date;
	Integer final_price;
	Integer use_wowpoint;
	String merchant_uid;
	String address_id;
	String receiver_name;
	String receiver_phone;
	String request_message;
}
