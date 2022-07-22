import React from "react";
import "../../style/notice_detail.css";
const SupportNotice = ({data}) => {
  console.log(data);
  return (
    <div>
      <div>{data.notice_title}</div>
      <div>{data.admin_id}</div> 
      <div>{data.write_date}</div>
      <div>{data.notice_content}</div>
    </div>
  );
};

export default SupportNotice;
