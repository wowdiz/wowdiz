import React, { useEffect, useState, useRef } from "react";
import AxiosService from "../../../service/AxiosService";
import PurchaseStep from "./../../../components/funding/PurchaseStep";
import "../../../style/purchase_pay.css";
import MyParcelAddress from "../../../components/myParcelAddress/MyParcelAddress";
const FundingPay = () => {
  const purchaseInfo = [JSON.parse(localStorage.getItem("purchaseInfo"))];
  const purchaseId = useRef();
  const [userAddress, setUserAddress] = useState([]);

  const [userId, setUserId] = useState();

  const [userName, setUserName] = useState();
  const userNameRef = useRef(userName);

  const [userEmail, setUserEmail] = useState();
  const userEmailRef = useRef(userEmail);

  const [userPhone, setUserPhone] = useState();
  const userPhoneRef = useRef(userPhone);

  const currentWowPointRef = useRef();

  const [useWowPoint, setUseWowPoint] = useState(0);
  const useWowpointRef = useRef();

  const receiverNameRef = useRef(userName);

  const [parcelAddressName, setParcelAddressName] = useState();
  const parcelAddressNameRef = useRef();

  const [parcelAddress, setParcelAddress] = useState();
  const parcelAddressRef = useRef();

  const [parcelAddressDetail, setParcelAddressDetail] = useState();
  const parcelAddressDetailRef = useRef();

  const requestMessageRef = useRef();

  const receiverPhoneRef = useRef(userPhoneRef);
  const parcelNameRef = useRef();

  const [finalPrice, setFinalPrice] = useState();

  const { IMP } = window;
  IMP.init("imp98050032");

  useEffect(() => {
    AxiosService.post("/purchase/getSupporterInfo").then((res) => {
      setUserId(res.data.supporterInfo.user_id);
      setUserName(res.data.supporterInfo.user_name);
      setUserEmail(res.data.supporterInfo.user_email);
      setUserPhone(res.data.supporterInfo.user_phone);
      currentWowPointRef.current = res.data.supporterInfo.current_wowpoint;
      setUserAddress(res.data.userAddress);
      setFinalPrice(purchaseInfo[0].total_price);
    });
  }, []);

  const createPurchase = (requestPay) => {
    AxiosService.post("/purchase/createPurchaseId").then((res) => {
      purchaseId.current = res.data;
      console.log(purchaseId.current);
      requestPay(res.data);
    });
  };
  //참고문서 https://guide.iamport.kr/005331e6-be5d-4cc1-a547-9e78416b77e9
  const requestPay = (purchaseUid) => {
    console.log(
      "페이버튼",
      // purchaseId.current,
      purchaseUid,
      purchaseInfo[0].project_name,
      finalPrice - useWowPoint
    );
    console.log(
      "페이버튼",
      userId,
      userEmailRef.current.value,
      userNameRef.current.value,
      receiverPhoneRef.current.value
    );

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        pg: "kakaopay",
        // merchant_uid: purchaseUid,
        name: purchaseInfo[0].project_name,
        amount: 0,
        customer_uid: userId, // 필수 입력
        buyer_email: userEmailRef.current.value,
        buyer_name: userNameRef.current.value,
        buyer_tel: receiverPhoneRef.current.value,
        buyer_addr: "",
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          console.log(rsp);
          AxiosService.post("/iamport/initSchedulePay", {
            ...purchaseInfo[0],
            final_price: finalPrice - useWowPoint,
            use_wowpoint: useWowPoint,
            merchant_uid: purchaseUid,
            address_id: "나중에 넣어줌",
            receiver_name: receiverNameRef.current.value,
            receiver_phone: receiverPhoneRef.current.value,
            request_message: requestMessageRef.current.value,
          });

          // AxiosService.get("/iamport/getIamPortToken")
          //   .then((res) => {
          //     AxiosService.post(
          //       "https://api.iamport.kr/subscribe/payments/schedule",
          //       {
          //         customer_uid: userId,
          //         schedules: [
          //           {
          //             merchant_uid: purchaseUid,
          //             schedule_at: 1659058839,
          //             amount: finalPrice - useWowPoint,
          //             name: purchaseInfo[0].project_name,
          //             buyer_name: userNameRef.current.value,
          //             buyer_tel: userPhoneRef.current.value,
          //             buyer_email: userEmailRef.current.value,
          //           },
          //         ],
          //       },
          //       {
          //         withCredentials: true,
          //         headers: {
          //           "Content-Type": "application/json",
          //           Authorization: "Bearer " + res.data,
          //           "Access-Control-Allow-Origin": "*",
          //         },
          //       }
          //     );
          //   })
          //   .then((res) => {
          //     console.log(res);
          //   });
          //   // 결제 성공 시 로직,
          //   .ajax({
          //     url: "{서버의 결제 정보를 받는 endpoint}", // 예: https://www.myservice.com/payments/complete
          //     method: "POST",
          //     headers: { "Content-Type": "application/json" },
          //     data: {
          //       imp_uid: rsp.imp_uid,
          //       merchant_uid: rsp.merchant_uid,
          //     },
          // }).done(function (data) {
          //   //결제 API 성공시 백단에서 처리할 로직
          // });
        } else {
          alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
        }
      }
    );
  };
  // 모달 창 관리
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const calWowPoint = (e) => {
    if (e.target.value > currentWowPointRef.current) {
      alert("사용가능한 포인트를 벗어났습니다");
      setUseWowPoint(currentWowPointRef.current);
      return;
    }

    setUseWowPoint(e.target.value);
  };

  return (
    <>
      <div className="pay_wrap">
        <PurchaseStep />
        <div className="pay_wrap_left">
          <div className="pay_supporter_info">
            <p className="pay_title first">펀딩 서포터</p>
            <hr className="divider" />
            <span>이름</span>
            <input
              type="text"
              className="supporter_name"
              name="supporter_name"
              ref={userNameRef}
              value={userName}
            />
            <span>이메일</span>
            <input
              type="text"
              className="supporter_email pay_input"
              name="supporter_email"
              value={userEmail}
              ref={userEmailRef}
            />
            <span>휴대전화</span>
            <input
              type="text"
              className="supporter_phone"
              name="supporter_phone"
              value={userPhone}
              ref={userPhoneRef}
            />
          </div>
          <div className="pay_parcel_address">
            <p className="pay_title">리워드 배송지</p>
            <hr className="divider" />
            <button type="button" onClick={handleModalOpen}>
              배송지 추가
            </button>
            {userAddress.length !== 0 ? (
              <>
                <span>수령자</span>
                <input
                  type="text"
                  className="supporter_receiver_name"
                  name="receiver_name"
                  ref={receiverNameRef}
                  defaultValue={userName}
                  onChange={(e) => {
                    receiverNameRef.current = e.target.value;
                    console.log(receiverNameRef.current);
                  }}
                />
                <span>연락처</span>
                <input
                  type="text"
                  className="supporter_receiver_phone"
                  name="receiver_phone"
                  defaultValue={userPhone}
                  ref={receiverPhoneRef}
                  onChange={(e) => {
                    receiverPhoneRef.current = e.target.value;
                  }}
                />
                <span>배송지 이름</span>
                <input
                  type="text"
                  className="supporter_address_name"
                  name="address_name"
                  value={parcelAddressName}
                  ref={parcelAddressRef}
                  onChange={(e) => {
                    parcelAddressRef.current = e.target.value;
                  }}
                />
                <span>주소</span>
                <input
                  type="text"
                  className="supporter_address"
                  name="receiver_address"
                  defaultValue={parcelAddress}
                  ref={parcelAddressRef}
                  onChange={(e) => {
                    parcelAddressRef.current = e.target.value;
                  }}
                />
                <span>상세주소</span>
                <input
                  type="text"
                  className="supporter_address"
                  name="receiver_address_detail"
                  defaultValue={parcelAddressDetail}
                  ref={parcelAddressDetailRef}
                  onChange={(e) => {
                    parcelAddressDetailRef.current = e.target.value;
                  }}
                />
                <span>배송 시 요청사항(선택)</span>
                <input
                  type="text"
                  className="supporter_request_message"
                  name="request_message"
                  ref={requestMessageRef}
                  onChange={(e) => {
                    requestMessageRef.current = e.target.value;
                  }}
                />
              </>
            ) : (
              <>
                <p>등록된 배송지가 없습니다.</p>
              </>
            )}
          </div>
          <MyParcelAddress
            open={open}
            handleModalOpen={handleModalOpen}
            handleModalClose={handleModalClose}
            setParcelAddressName={setParcelAddressName}
            setParcelAddress={setParcelAddress}
            setParcelAddressDetail={setParcelAddressDetail}
          />
          <div className="pay_wowpoint">
            <p className="pay_title">와우디즈 포인트</p>{" "}
            <hr className="divider" />
            <p>
              사용 가능한 포인트:
              {currentWowPointRef.current}
            </p>
            <input
              type="number"
              step="1000"
              className="use_wowpoint"
              name="use_wowpoint"
              value={useWowPoint}
              onChange={(e) => {
                calWowPoint(e);
              }}
            />
          </div>
          <div className="pay_payment_method">
            <p className="pay_title">결제수단</p> <hr className="divider" />
            카카오페이, 페이코, KG이니시스
          </div>
        </div>
        <div className="pay_wrap_right">
          <p className="pay_title first">리워드 배송지</p>
          <hr className="divider" />
          <p>상품명:{purchaseInfo[0].project_name}</p>
          <p>개수:{purchaseInfo[0].total_qty}개</p>
          <p>가격:{finalPrice - useWowPoint}원</p>
          <button
            type="button"
            onClick={() => {
              createPurchase(requestPay);
            }}
          >
            펀딩 예약하기
          </button>
        </div>
      </div>
    </>
  );
};

export default FundingPay;
