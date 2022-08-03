package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.AdminDto;
import com.wowdiz.finalproj.dto.MakerDto;
import com.wowdiz.finalproj.mapper.AdminMapper;

@Service
public class AdminServiceImpl implements AdminService{
	private final AdminMapper adminMapper;
	
	public AdminServiceImpl(AdminMapper adminMapper) {
		this.adminMapper = adminMapper;
	}
	
	@Override
	public List<MakerDto> getAwaitingProjectList() {
		return adminMapper.selectAwaitingProjectList();
	}
	
	@Override
	public List<MakerDto> getOnList() {
		return adminMapper.selectOnProjectList();
	}
	
	@Override
	public List<MakerDto> getFinishedList() {
		return adminMapper.selectFinishedProjectList();
	}
	
	@Override
	public List<MakerDto> getProjectData(Integer project_id) {
		return adminMapper.selectProjectDetail(project_id);
	}
	
	@Override
	public void approveProject(Map<String, String> map) {
		AdminDto dto = new AdminDto();
		String tmpApproved = map.get("approved");
		String tmpProjectId = map.get("project_id");
		Integer ProjectId = Integer.parseInt(tmpProjectId);
		
		if(tmpApproved.equals("Y")) 
			dto.setApproved("N");
		else
			dto.setApproved("Y");
		
		dto.setProject_id(ProjectId);
		adminMapper.updateProjectApproved(dto);
	}
	
	@Override
	public List<MakerDto> getMainList() {
		return adminMapper.selectMainList();
	}
}
