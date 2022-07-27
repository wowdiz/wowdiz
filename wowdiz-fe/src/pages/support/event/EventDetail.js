import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";
import "../../../style/event.css";

const EventDetail = () => {
  const { event_id } = useParams();
  const [eventDetail, setEventDetail] = useState([]);

  let eventdetailtUrl = "/supportboard/eventdetail?event_id=" + event_id;

  const eventDetailData = () => {
    AxiosService.get(eventdetailtUrl, event_id).then((res) => {
      setEventDetail(res.data);
      console.log("res.datai1", res.data);
    });
  };

  useEffect(() => {
    eventDetailData();
  }, []);

  return (
    <div className="event_detail_container">
      <div className="event_detail_header">
        <p className="event_detail_title">{eventDetail.event_title}</p>

        <div className="event_detail_writer">
          WOWDIZ {eventDetail.write_date} {eventDetail.view_count}
        </div>
      </div>
      <div className="event_detail_content">{eventDetail.event_content}</div>
    </div>
  );
};

export default EventDetail;
