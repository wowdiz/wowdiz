package com.wowdiz.finalproj.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.EventDto;
import com.wowdiz.finalproj.mapper.EventMapper;

@Service
public class EventServiceImpl implements EventService {
	
	private final EventMapper eventMapper;

	public EventServiceImpl(EventMapper eventMapper){
		this.eventMapper = eventMapper;
	}

	@Override
	public List <EventDto> eventList() {
		
		return eventMapper.eventList();
	}
	
	@Override
	public void eventCreate (EventDto dto) {
		eventMapper.eventCreate(dto);
	}
	
	@Override
	public EventDto eventDetail (Integer event_id) {
		return eventMapper.eventDetail(event_id);
	}
	
	@Override
	public void eventUpdate (EventDto dto) {
		eventMapper.eventUpdate(dto);
	}
	
	@Override
	public void eventDelete(Integer event_id) {
		eventMapper.eventDelete(event_id);
	}
}
