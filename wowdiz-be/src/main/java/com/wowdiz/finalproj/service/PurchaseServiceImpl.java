package com.wowdiz.finalproj.service;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.PurchaseSupporterInfoDto;
import com.wowdiz.finalproj.mapper.PurchaseMapper;

@Service
public class PurchaseServiceImpl implements PurchaseService{
	
	private final PurchaseMapper purchaseMapper;
	
	public PurchaseServiceImpl(PurchaseMapper purchaseMapper) {
		this.purchaseMapper = purchaseMapper;
	}
	
	public PurchaseSupporterInfoDto selectPurchaseSupporterInfo(Integer user_id) {
		return purchaseMapper.selectPurchaseSupporterInfo(user_id);
	}
}
