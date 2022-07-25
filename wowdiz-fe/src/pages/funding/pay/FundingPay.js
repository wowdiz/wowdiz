import React from "react";
import { useLocation } from "react-router-dom";

const FundingPay = () => {
  const purchaseInfo = useLocation();
  console.log(purchaseInfo.state);
  return <div>{purchaseInfo}</div>;
};

export default FundingPay;
