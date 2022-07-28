import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import DaumPostcode from "react-daum-postcode";
const KakaoAddressApi = ({ handlePostCode, handleModalClose, open }) => {
  //  모달 커스텀 스타일
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "100%",
    height: "95%",
    padding: "0px",
  };

  return (
    <Modal
      open={open}
      onClose={handleModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />{" "}
        {/* <button type="button" onClick={handleModalClose} className="btn">
          닫기
        </button> */}
      </Box>
    </Modal>
  );
};

export default KakaoAddressApi;
