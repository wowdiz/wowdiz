import React, { useEffect, useState } from "react";
import SupportNotice from "../../../components/support/SupportNotice";
import AxiosService from "../../../service/AxiosService";

const NoticeDetail = () => {

  const [data,setData] =useState([])

  useEffect(() => {
    AxiosService.get("/notice/list").then(res=>{
    console.dir(res.data)
    setData(res.data)
  })
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);

  return (
    <div>
      <div>
      {data &&
        data.map((data, idx) => (
            <SupportNotice  key={idx} data={data} />
      ))}

      </div>
    </div>
  );
};

export default NoticeDetail;
