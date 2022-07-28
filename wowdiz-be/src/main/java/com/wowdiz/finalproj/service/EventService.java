package com.wowdiz.finalproj.service;

import java.util.List;

import com.wowdiz.finalproj.dto.EventDto;

public interface EventService {
	public List<EventDto> eventList ();
	public void eventCreate (EventDto dto);
	public EventDto eventDetail (Integer event_id);
	public void eventUpdate (EventDto dto);
	public void eventDelete(Integer event_id);

}
