package com.wowdiz.finalproj.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.AdminDto;
import com.wowdiz.finalproj.dto.MakerDto;
import com.wowdiz.finalproj.service.AdminService;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdminController {
   private final AdminService adminService;
   
   public AdminController(AdminService adminService) {
	   this.adminService = adminService;
   }
   
   @GetMapping("/awaitingList")
   public List<MakerDto> getAwaitingList() {
	   return adminService.getAwaitingProjectList();
   }
   
   @GetMapping("/onList")
   public List<MakerDto> getOnList() {
	   return adminService.getOnList();
   }
   
   @GetMapping("/finishedList")
   public List<MakerDto> getFinishedList() {
	   return adminService.getFinishedList();
   }
   
   @GetMapping("/projectData")
   public List<MakerDto> getProjectData(Integer project_id) {
	   return adminService.getProjectData(project_id);
   }
   
   @PostMapping("/approveProject")
   public void approveProject(@RequestBody Map<String, String> map) {
	   adminService.approveProject(map);
   }
}