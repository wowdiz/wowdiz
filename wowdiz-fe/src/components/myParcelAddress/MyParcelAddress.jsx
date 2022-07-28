import React, { useState, useEffect } from "react";
import { Box, Modal, Typography } from "@mui/material";
import AxiosService from "../../service/AxiosService";
import AddParcelAddress from "./AddParcelAddress";
import RegisteredParcelAddress from "./RegisteredParcelAddress";

const MyParcelAddress = ({
  handleModalOpen,
  handleModalClose,
  open,
  setParcelAddressName,
  setParcelAddress,
  setParcelAddressDetail,
}) => {
  const [update, setUpdate] = useState(false);
  //  모달 커스텀 스타일
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [parcelAddressList, setParcelAddressList] = useState();

  useEffect(() => {
    if (open) {
      updateParcelAddress();
    }
  }, [open]);

  const updateParcelAddress = () => {
    AxiosService.post("/purchase/getParcelAddress").then((res) => {
      console.log("axios실행!");
      setParcelAddressList(res.data);
    });
  };
  const [addParcelAddressOpen, setAddParcelAddressOpen] = useState(false);

  // 모달 열고 닫는 함수
  const handleAddParcelAddressModalOpen = () => setAddParcelAddressOpen(true);
  const handleAddParcelAddressModalClose = () => setAddParcelAddressOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{ marginBottom: "30px" }}
          >
            나의 배송지
          </Typography>
          {parcelAddressList &&
            parcelAddressList.map((data, idx) => (
              <RegisteredParcelAddress
                key={idx}
                data={data}
                setParcelAddressName={setParcelAddressName}
                setParcelAddress={setParcelAddress}
                setParcelAddressDetail={setParcelAddressDetail}
                handleModalClose={handleModalClose}
              />
            ))}
          <button type="button" onClick={handleAddParcelAddressModalOpen}>
            배송지 추가하기
          </button>
          <AddParcelAddress
            open={addParcelAddressOpen}
            handleModalClose={handleModalClose}
            handleModalOpen={handleAddParcelAddressModalOpen}
            updateParcelAddress={updateParcelAddress}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default MyParcelAddress;
