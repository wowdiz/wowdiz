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
		System.out.println("!!!!!!!!!!!!!!!서비스map : " + map);
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
		System.out.println("=======list.size()=======" + list.size());
		
		for(int i = 0; i < list.size(); i++) {
			Map<String,Object> rewardMap = (Map<String, Object>) list.get(i);
			System.out.println("rewardMap[" + i + "] : " + rewardMap);
			String tmpRp = (String)rewardMap.get("project_reward_price");
			Integer rewardPrice = Integer.parseInt(tmpRp);
			
			String rewardTitle = (String)rewardMap.get("project_reward_title");
			String rewardInfo = (String)rewardMap.get("project_reward_info");
			
			String requireParcel = (String)rewardMap.get("require_parcel");
			
			dto.setProject_reward_price(rewardPrice);
			dto.setProject_reward_title(rewardTitle);
			dto.setProject_reward_info(rewardInfo);
			dto.setRequire_parcel(requireParcel);
			
			System.out.println("project_reward[" + i + "] = *** " 
					+ "project_reward_price[" + i + "] : "  + dto.getProject_reward_price() 
					+ "project_reward_title[" + i + "] : "  + dto.getProject_reward_title() 
					+ "project_reward_info[" + i + "] : "  + dto.getProject_reward_info()
					+ "project_reward_parcel[" + i + "] : "  + dto.getRequire_parcel() + " ***");
			
			makerMapper.insertMakerProjectReward(dto);
//			
			List<Object> optionList = (List)rewardMap.get("rewardOptions");
			
			for(int j = 0; j < optionList.size(); j++) {
				System.out.println("optionList" + "[" + j + "] : " + optionList.get(j));
				Map<String, Object> rewardOptionMap = (Map<String, Object>)optionList.get(i);
				String rewardOptionName = (String)rewardOptionMap.get("project_reward_option_name");
				String rewardOptionDetail = (String)rewardOptionMap.get("project_reward_option_detail");
				String tmpRewardOptionType = (String)rewardOptionMap.get("project_reward_option_type");
				String tmppRewardOptionType = tmpRewardOptionType.substring(0, 3);
				String rewardOptionType = "";
				if(tmppRewardOptionType.equals("선택형")) {
					rewardOptionType = "S";
				} else {
					rewardOptionType = "A";
				}
				
				dto.setProject_reward_option_name(rewardOptionName);
				dto.setProject_reward_option_detail(rewardOptionDetail);
				dto.setProject_reward_option_type(rewardOptionType);
				
				System.out.println("project_reward_option : [" + j + "] : " 
				+ dto.getProject_reward_option_name() + dto.getProject_reward_option_detail() + dto.getProject_reward_option_type());
				
				makerMapper.insertMakerProjectRewardOption(dto);
			}
		}
		
	}
}
