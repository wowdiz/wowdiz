package com.wowdiz.finalproj.mapper;

import java.util.List;

import org.springframework.stereotype.Service;

import com.wowdiz.finalproj.dto.EventDto;
import com.wowdiz.finalproj.dto.QNADto;

@Service
public interface EventMapper {

	public List<EventDto> eventList ();
	public void eventCreate (EventDto dto);
	public EventDto eventDetail (Integer event_id);
	public void eventUpdate (EventDto dto);
	public void eventDelete (Integer event_id);

}

