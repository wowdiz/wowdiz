package com.wowdiz.finalproj.service;

import java.util.List;
import java.util.Map;

import com.wowdiz.finalproj.dto.MakerDto;

public interface AdminService {
	public List<MakerDto> getAwaitingProjectList();
	public List<MakerDto> getOnList();
	public List<MakerDto> getFinishedList();
	public List<MakerDto> getProjectData(Integer project_id);
	public void approveProject(Map<String, String> map);
	public List<MakerDto> getMainList();
}
