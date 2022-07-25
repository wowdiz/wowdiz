package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.MakerDto;
import com.wowdiz.finalproj.mapper.MakerMapper;

@Service
public class MakerServiceImpl implements MakerService{
	private final MakerMapper makerMapper;
	
	public MakerServiceImpl(MakerMapper makerMapper) {
		this.makerMapper = makerMapper;
	}
	
	@Override
	public void insertMakerProject(Map<String, Object> map) {
		MakerDto dto = new MakerDto();

		//table project
		System.out.println("서비스map : " + map);
		//map에 담겨있는 project데이터 꺼내오기
		String projectName = (String)map.get("project_name");
		String tmpTa = (String)map.get("target_amount");
		Integer targetAmount = Integer.parseInt(tmpTa);
		String projectThumbnail = (String)map.get("project_thumbnail");
		String tmpPk = map.get("project_keyword").toString();
		String projectKeyword = tmpPk.substring(1, tmpPk.length()-1);
		String closeDate = (String)map.get("close_date");
		String projectStory = (String)map.get("project_story");
		
		//dto에 꺼내온 데이터 담기
		dto.setProject_name(projectName);
		dto.setTarget_amount(targetAmount);
		dto.setProject_thumbnail(projectThumbnail);
		dto.setProject_keyword(projectKeyword);
		dto.setClose_date(closeDate);
		dto.setProject_story(projectStory);
		
		System.out.println("dto : " + dto);
		
		makerMapper.insertMakerProject(dto);
		
		
		dto.getProject_id();
		System.out.println("insert하자마자 반환된 project_id : " + dto.getProject_id());
		
		//project_reward table 
		List<Object> list = (List)map.get("reward");
		Map<String,Object> rewardMap = (Map<String, Object>) list.get(0);
		
		String tmpRp = (String)rewardMap.get("reward_price");
		Integer rewardPrice = Integer.parseInt(tmpRp);
		
		String rewardTitle = (String)rewardMap.get("reward_title");
		String rewardInfo = (String)rewardMap.get("reward_info");
		
		String requireParcel = (String)rewardMap.get("require_parcel");
		
		dto.setReward_price(rewardPrice);
		dto.setReward_title(rewardTitle);
		dto.setReward_info(rewardInfo);
		dto.setRequire_parcel(requireParcel);
		
		System.out.println("setReward후 dto : " + dto);
		
		makerMapper.insertMakerProjectReward(dto);
		
		dto.getReward_id();
		System.out.println("insert하자마자 반환된 reward_id : " + dto.getReward_id());
		
		//project_reward_option table
		System.out.println("rewardMap.get('rewardOptions') : " + rewardMap.get("rewardOptions"));
		List<Object> optionList = (List)rewardMap.get("rewardOptions");
		for(int i = 0; i < optionList.size(); i++) {
			System.out.println("optionList" + "[" + i + "] : " + optionList.get(i));
			Map<String, Object> rewardOptionMap = (Map<String, Object>)optionList.get(i);
			String rewardOptionName = (String)rewardOptionMap.get("reward_option_name");
			String rewardOptionDetail = (String)rewardOptionMap.get("reward_option_detail");
			String tmpRewardOptionType = (String)rewardOptionMap.get("reward_option_type");
			String tmppRewardOptionType = tmpRewardOptionType.substring(0, 3);
			String rewardOptionType = "";
			if(tmppRewardOptionType.equals("선택형")) {
				rewardOptionType = "S";
			} else {
				rewardOptionType = "A";
			}
			
			dto.setReward_option_name(rewardOptionName);
			dto.setReward_option_detail(rewardOptionDetail);
			dto.setReward_option_type(rewardOptionType);
			
			System.out.println("[" + i + "] : " 
			+ dto.getReward_option_name() + dto.getReward_option_detail() + dto.getReward_option_type());
			
			makerMapper.insertMakerProjectRewardOption(dto);
		}
	}
}
