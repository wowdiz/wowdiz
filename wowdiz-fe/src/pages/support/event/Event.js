<<<<<<< HEAD
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";
import Parser from "html-react-parser";
import "../../../style/event.css";
=======
import React from "react";
>>>>>>> d0a79c96aafe4f86c448b70e72ff052858e875b8

const Event = () => {
  const { event_id } = useParams();
  const navi = useNavigate();
  const [eventData, setEventData] = useState([]);
  const eventUrl = "/supportboard/event";

  const eventList = useCallback(() => {
    AxiosService.get(eventUrl, event_id).then((res) => {
      setEventData(res.data);
      console.log(res.data);
    });
  }, [eventUrl]);

  useEffect(() => {
    eventList();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <div className="event_close">
        <span
          className="event_menu"
          onClick={() => navi("/supportboard/closedevent")}
        >
          <b>종료된이벤트</b>
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
            {row.event_status === "Y" ? (
              <div className="event_main">
                <ul className="event_wrap">
                  <li className="event_container">
                    <div className="event_info">
                      <div className="event_important">
                        <b>
                          {row.event_status === "Y" ? (
                            <p>진행중</p>
                          ) : (
                            <p>마감</p>
                          )}
                        </b>
                      </div>

                      <div
                        className="notice_thum"
                        onClick={() =>
                          navi("/supportboard/eventdetail/" + row.event_id)
                        }
                      >                        
                      </div>

                      <div
                        className="event_title"
                        onClick={() =>
                          navi("/supportboard/eventdetail/" + row.event_id)
                        }
                      >
                        {row.event_title}
                      </div>
                      <br />
                      <span className="event_admin">wowdiz</span>
                      <span className="event_date">{row.write_date}</span>
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
=======
        123
>>>>>>> d0a79c96aafe4f86c448b70e72ff052858e875b8
    </div>
  );
};

export default Event;
