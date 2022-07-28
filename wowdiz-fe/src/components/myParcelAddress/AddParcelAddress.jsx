import React, { useState, useRef } from "react";
import { Box, Modal, Typography } from "@mui/material";
import KakaoAddressApi from "./KakaoAddressApi";
import AxiosService from "./../../service/AxiosService";
import "../../style/parcel_address.css";

const AddParcelAddress = ({ handleModalClose, open, updateParcelAddress }) => {
  // 모달 창 관리 state
  const [kakaoApiOpen, setKakaoApiOpen] = React.useState(false);

  // 모달 열고 닫는 함수
  const handlekakaoApiModalOpen = () => setKakaoApiOpen(true);
  const handlekakaoApiModalClose = () => setKakaoApiOpen(false);

  // Api 주소값 저장
  // const [address, setAddress] = useState({
  //   user_zipcode: "",
  //   user_address: "",
  // });
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 530,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = (kakaoData) => {
    let fullAddress = kakaoData.address;
    let extraAddress = "";

    if (kakaoData.addressType === "R") {
      if (kakaoData.bname !== "") {
        extraAddress += kakaoData.bname;
      }

      if (kakaoData.buildingName !== "") {
        extraAddress +=
          extraAddress !== ""
            ? `, ${kakaoData.buildingName}`
            : kakaoData.buildingName;
      }

      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    // setAddress({
    //   ...address,
    //   user_address: fullAddress,
    //   user_zipcode: kakaoData.zonecode,
    // });
    address.current.value = "[" + kakaoData.zonecode + "] " + fullAddress;
    zipcode.current = kakaoData.zonecode;
    handlekakaoApiModalClose();
  };

  const address_name = useRef();
  const address = useRef();
  const address_detail = useRef();
  const zipcode = useRef();

  const saveAddress = () => {
    if (address_name.current.value === "") {
      alert("배송지의 이름을 입력해주시기 바랍니다.");
      return;
    }

    if (address.current.value === "") {
      alert("우편번호를 검색하여 상세주소를 입력해주시기 바랍니다.");
      return;
    }

    AxiosService.post(
      "/api/user/saveParcelAddress",
      JSON.stringify({
        address_name: address_name.current.value,
        address: address.current.value,
        address_detail: address_detail.current.value,
        zipcode: zipcode.current,
      }),
      {
        headers: { "Content-Type": `application/json` },
      }
    ).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("배송지가 정상적으로 저장되었습니다");
        handleModalClose();
        updateParcelAddress();
      } else {
        alert("배송지 저장 중 에러가 발생했습니다.");
      }
    });
  };
  return (
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
          component="h3"
          sx={{ marginBottom: "30px" }}
        >
          배송지 추가하기
        </Typography>
        <div className="add_parcel_address_wrap">
          <input
            type="text"
            name="address_name"
            ref={address_name}
            placeholder="배송지의 이름을 입력해주세요."
          />

          {/* <button type="button" onClick={handlekakaoApiModalOpen}>
            우편번호 찾기
          </button> */}
          <input
            type="text"
            readOnly
            ref={address}
            name="address"
            onClick={handlekakaoApiModalOpen}
            placeholder="우편번호 찾기"
          />
          {/* <input type="text" ref={zipcode} name="zipcode" /> */}
          <input
            type="text"
            name="address_detail"
            placeholder="상세주소를 입력해주세요. (50자까지 입력 가능)"
            maxLength={50}
            ref={address_detail}
          />

          <KakaoAddressApi
            open={kakaoApiOpen}
            handleModalOpen={handlekakaoApiModalOpen}
            handleModalClose={handlekakaoApiModalClose}
            handlePostCode={handlePostCode}
          />
          <button type="button" className="saveAddress" onClick={saveAddress}>
            저장하기
          </button>
          {/* <button type="button" onClick={handleModalClose} className="btn">
            닫기
          </button> */}
        </div>
      </Box>
    </Modal>
  );
};
export default AddParcelAddress;
