import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";
import "../../../style/notice.css";

const ClosedEvent = () => {
  const { event_id } = useParams();
  const navi = useNavigate();
  const [eventData, setEventData] = useState([]);
  const eventUrl = "/supportboard/event";

  const eventList = useCallback(() => {
    AxiosService.get(eventUrl, event_id).then((res) => {
      setEventData(res.data);
      console.log(res);
    });
  }, [eventUrl]);

  useEffect(() => {
    eventList();
  }, []);

  return (
    <div>
      <div className="event_close">
        <span
          className="event_menu"
          onClick={() => navi("/supportboard/closedevent")}
        >
          <b>종료된이벤트</b>{" "}
        </span>
      </div>
      <div className="event_progress">
        <span onClick={() => navi("/supportboard/event")}>
          <b>진행중이벤트</b>
        </span>
      </div>
      <div>
        {eventData.map((row, idx) => (
          <div key={idx}>
            {row.event_status === "N" ? (
              <div className="support_main">
                <ul className="support_wrap">
                  <li className="support_container">
                    <b className="support_important">
                      {row.event_status === "Y" ? <p>진행중</p> : <p>마감</p>}
                    </b>
                    <div className="support_info">
                      <div className="support_thum">{row.thum}</div>
                      <h3
                        className="support_title"
                        onClick={() =>
                          navi("/supportboard/eventdetail/" + row.event_id)
                        }
                      >
                        {row.event_title}
                      </h3>
                      <br />
                      <span className="support_admin">wowdiz</span>
                      <span className="support_date">{row.write_date}</span>
                      <span></span>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClosedEvent;
