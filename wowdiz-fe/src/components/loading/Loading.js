import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color, message }) => {
  return (
    <div class="loding_contentWrap">
      <div
        style={{
          position: "fixed",

          top: "40%",

          left: "50%",

          transform: "translate(-50%, -50%)",
        }}
      >
        <h2>와우디즈 서비스</h2>
        <h2>{message}</h2>
        <h2>창을 닫지 말아주세요.</h2>
        <ReactLoading type={type} color={color} height={"80%"} width={"80%"} />
      </div>
    </div>
  );
};

export default Loading;
