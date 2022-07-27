import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const CustomModal = ({ open, handleClose, modalTitle, modalContent }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {modalTitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <p
            style={{ color: "rgba(0,0,0,.54)", bold: "700", fontSize: "18px" }}
          >
            {modalContent}
          </p>
        </Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
