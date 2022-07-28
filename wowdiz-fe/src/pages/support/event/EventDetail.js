import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";
import Parser from "html-react-parser";
import Event from './Event';
import "../../../style/event.css";

const EventDetail = () => {
  const { event_id } = useParams();
  const [eventDetail, setEventDetail] = useState(null);

  let eventdetailtUrl = "/supportboard/eventdetail?event_id=" + event_id;

  const eventDetailData = () => {
    AxiosService.get(eventdetailtUrl, event_id).then((res) => {
      setEventDetail(res.data);
      console.log("res.datai1", res.data.event_content);
       
    });
    
  };

  useEffect(() => {
    eventDetailData();
  }, []);

  return (
    <div className="event_detail_container">
      {eventDetail === null ? (
        ""
      ) : (
        <div>
          <div className="event_detail_header">
            <p className="event_detail_title">{eventDetail.event_title}</p>

            <div className="event_detail_writer">
              WOWDIZ {eventDetail.write_date} {eventDetail.view_count}
            </div>
          </div>
          <div className="event_detail_content">
            <div>{Parser(eventDetail.event_content)}</div>
          </div>
          <Event value="detaildata"/>
        </div>
      )}
    </div>
  );
};;

export default EventDetail;
