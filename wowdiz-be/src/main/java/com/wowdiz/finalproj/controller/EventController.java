package com.wowdiz.finalproj.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wowdiz.finalproj.dto.EventDto;
import com.wowdiz.finalproj.dto.FAQDto;
import com.wowdiz.finalproj.service.EventService;

@RestController
@CrossOrigin
@RequestMapping("/supportboard")
public class EventController {
	private static final EventDto EventDto = null;
	private EventService eventService;
	
	public EventController (EventService eventService) {
		
		this.eventService = eventService;
	}
	
	@GetMapping("/event")
	public List<EventDto> eventList () {
		
		return eventService.eventList();
	}
	@PostMapping("/eventwrite")
	public void eventCreate(@RequestBody EventDto dto) {	
		eventService.eventCreate(dto);
	}
	
	@GetMapping("/eventdetail")
	public EventDto eventDetail(@RequestParam Integer event_id) {
		eventService.eventDetail(event_id);	
		
		return eventService.eventDetail(event_id);
	}
	
	@GetMapping("/eventdelete")
	public void faqdetele(Integer event_id) {
		System.out.println(event_id);
		eventService.eventDelete(event_id);
	}
	
	@PostMapping("/eventupdate")
	public void eventUpdate (@RequestBody EventDto dto) {
		eventService.eventUpdate(dto);
	}
}
