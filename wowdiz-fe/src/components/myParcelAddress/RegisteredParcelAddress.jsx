import React, { useState } from "react";
import "../../style/parcel_address.css";

const RegisteredParcelAddress = ({
  data,
  setParcelAddressName,
  setParcelAddress,
  setParcelAddressDetail,
  handleModalClose,
}) => {
  const addressName = data.address_name;
  const address = data.address;
  const addressDetail = data.address_detail;
  return (
    <div className="registered_parcel_address">
      <div>
        <p>{addressName}</p>
        <p>{address}</p>
        <p>{addressDetail}</p>
      </div>
      <button
        type={"button"}
        onClick={() => {
          setParcelAddressName(addressName);
          setParcelAddress(address);
          setParcelAddressDetail(addressDetail);
          handleModalClose();
        }}
      >
        선택
      </button>
    </div>
  );
};

export default RegisteredParcelAddress;
