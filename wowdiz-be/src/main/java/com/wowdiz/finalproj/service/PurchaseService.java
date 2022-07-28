package com.wowdiz.finalproj.service;

import com.wowdiz.finalproj.dto.PurchaseSupporterInfoDto;

public interface PurchaseService {
	public PurchaseSupporterInfoDto selectPurchaseSupporterInfo(String user_id);
}
