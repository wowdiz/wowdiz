package com.wowdiz.finalproj.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.wowdiz.finalproj.dto.AdminDto;
import com.wowdiz.finalproj.dto.MakerDto;

@Mapper
public interface AdminMapper {
	public List<MakerDto> selectAwaitingProjectList(); 
	public List<MakerDto> selectOnProjectList();
	public List<MakerDto> selectFinishedProjectList();
	public List<MakerDto> selectProjectDetail(Integer project_id);
	public MakerDto selectOneProject(Integer project_id);
	public void updateProjectApproved(AdminDto dto);
}
