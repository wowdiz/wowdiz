import React, { useState } from "react";
import SupportBoard from "../../../components/support/SupportBoard";

const Notice = () => {
  const [support, setSupport] = useState([
    {
      importent: "중요",
      thum: "사진",
      title: "제목",
      name: "이름",
      date: "날짜",
    },
  ]);
  return (
    <div>
      <SupportBoard data={support} setData={setSupport} />
    </div>
  );
};

export default Notice;
