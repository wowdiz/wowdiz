package com.wowdiz.finalproj.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.PurchaseSupporterInfoDto;

@Mapper
public interface PurchaseMapper {
	public PurchaseSupporterInfoDto selectPurchaseSupporterInfo(String user_id);
}
