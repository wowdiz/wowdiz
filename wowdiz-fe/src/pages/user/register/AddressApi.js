import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import DaumPostcode from "react-daum-postcode";

const AddressApi = ({ modalStyle, handlePostCode, handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h1">
          <DaumPostcode onComplete={handlePostCode} />
          <button type="button" onClick={handleClose} className="btn">
            닫기
          </button>
        </Typography>
        <Typography
          id="modal-modal-description"address
          sx={{ mt: 2, textAlign: "center" }}
        >
          WOWDIZ
        </Typography>
      </Box>
    </Modal>
  );
};

export default AddressApi;
