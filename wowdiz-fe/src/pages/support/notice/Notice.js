import React, { useEffect, useState } from "react";
import SupportBoard from "../../../components/support/SupportBoard";
import AxiosService from "../../../service/AxiosService";

const Notice = () => {

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
            <SupportBoard  key={idx} data={data} />
      ))}

      </div>
    </div>
  );
};

export default Notice;
