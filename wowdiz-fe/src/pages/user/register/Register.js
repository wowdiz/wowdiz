import "../../../style/register.css";
import React, { useRef, useState } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import Test from "./AdressApi";
import { margin, style } from "@mui/system";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Register = () => {
  // react-hook-form 함수
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // 비밀번호 확인
  const user_pwd = useRef();

  user_pwd.current = watch("user_pwd");

  //모든 정보 확인
  const [passOk, setPassOk] = useState(false);

  //회원 정보 저장
  const [data, setData] = useState({
    user_id: "",
    user_name: "",
    user_pwd: "",
    user_nickname: "",
    user_phone: "",
    user_zonecode: "",
    user_address: "",
    user_address_detail: "",
  });
  // 주소 창 모달 OPEN
  const [open, setOpen] = React.useState(false);
  // 주소 모달창 OPEN
  const handleOpen = () => setOpen(true);
  // 주소 모달창 CLOSE
  const handleClose = () => setOpen(false);

  // 주소 창 모달창 STYLE
  const modalStyle = {
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
    console.log(fullAddress);
    console.log(kakaoData.zonecode);
    setData({
      ...data,
      user_address: fullAddress,
      user_zonecode: kakaoData.zonecode,
    });

    handleClose();
  };

  const onSubmit = (e) => {
    setData({
      ...data,
    });
    console.log(data);

    // setTimeout(() => {
    //   alert(data);
    //   const url = process.env.REACT_APP_SPRING_URL + "user/account";
    //   axios.post(url, data).then((res) => {
    //     alert("insert 성공");
    //   });
    // }, 2500); //2초후에 실행
  };

  const onDataChange = (e) => {
    const { className, value } = e.target;
    //이벤트 발생 name이 pass일 경우 무조건 passOk는 false
    if (className === "pass") setPassOk(false);
    setData({
      ...data,
      [className]: value,
    });
  };

  return (
    <div className="register_wrap">
      <div className="register_wrap_layout_background">
        <div className="register_wrap_from">
          <div className="register_main_source">
            {/* <div className="register_side"></div> */}
            <form onSubmit={handleSubmit(onSubmit)} className="register_form">
              <div style={{ textAlign: "center", fontSize: "35px" }}>
                <b> 회원가입</b>
              </div>
              <hr />
              <label className="accountLabel">이름</label>
              <input
                className="user_name"
                required
                placeholder="이름을 입력해주세요"
                // defaultValue={data.user_name}
                {...register("user_name", {
                  required: "이름을 입력해주세요",
                  pattern: {
                    value: /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/i,
                    message: "이름은 한글 또는 영문으로만 입력해주세요(혼용 X)",
                  },
                  // minLength: {
                  //   value: 2,
                  //   message: "이름을 2자 이상으로 입력해주세요",
                  // },
                  // maxLength: {
                  //   value: 10,
                  //   message: "이름은 열자 이내로입력해주세요",
                  // },
                })}
                onChange={onDataChange}
              />
              {errors.user_name && <p>{errors.user_name.message}</p>}
              <label className="accountLabel">Email</label>
              <input
                className="user_id"
                style={{ display: "inline" }}
                placeholder="이메일을 입력해주세요"
                required
                defaultValue={data.user_id}
                {...register("user_id", {
                  required: "이메일을 입력해주세요",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "이메일 형식에 맞게 입력해주세요",
                  },
                })}
                onChange={onDataChange}
              />
              <div
                style={{ display: "inline-block" }}
                onClick={() => alert("sl기민")}
              >
                인증하기
              </div>
              {errors.user_id && <p>{errors.user_id.message}</p>}
              <input
                className="user_email_certi"
                style={{ display: "block" }}
                placeholder="이메일 인증번호를 입력해주세요 "
                required
                onChange={onDataChange}
              />
              <label className="accountLabel">비밀번호</label>
              <input
                className="user_pwd"
                type="password"
                required
                defaultValue={data.user_pwd}
                {...register("user_pwd", {
                  required: "비밀번호를 입력해주세요",
                  minLength: {
                    value: 6,
                    message: "6자 이상의 비밀번호만 사용 가능합니다.",
                  },
                  maxLength: {
                    value: 16,
                    message: "16자 이하의 비밀번호만 사용 가능합니다.",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-ZS]).{8,}/,
                    message: "영문, 숫자를 혼용하여 입력해주세요..",
                  },
                })}
                onChange={onDataChange}
              />
              {errors.user_pwd && <p>{errors.user_pwd.message}</p>}
              <label className="accountLabel">비밀번호 확인</label>
              <input
                className="pwd_confirm"
                type="password"
                {...register("pwd_confirm", {
                  required: "비밀번호를 입력해주세요",
                  validate: (value) => value === user_pwd.current,
                })}
              />
              {errors.pwd_confirm && errors.pwd_confirm.type === "validate" && (
                <p>비밀번호가 일치하지 않습니다.</p>
              )}
              <label className="accountLabel">닉네임</label>
              <input
                style={{ display: "inline-block" }}
                className="user_nickname"
                required
                placeholder="이름을 입력해주세요"
                defaultValue={data.user_nickname}
                {...register("user_nickname", {
                  required: "닉네임을 입력해주세요",
                  pattern: {
                    value: /^[가-힣a-zA-Z]+$/i,
                    message: "닉네임은 한글 또는 영문으로만 입력해주세요",
                  },
                })}
                onChange={onDataChange}
              />
              <div
                style={{ display: "inline-block" }}
                onClick={() => alert("sl기민")}
              >
                중복확인
              </div>
              {errors.user_nickname && <p>{errors.user_nickname.message}</p>}
              <label className="accountLabel">휴대폰 번호</label>
              <input
                style={{ display: "block" }}
                className="user_phone"
                required
                placeholder="휴대폰번호를 입력해주세요  ex)010-0000-0000"
                defaultValue={data.user_phone}
                {...register("user_phone", {
                  required: "휴대폰번호를 입력해주세요",
                  pattern: {
                    value:
                      /^01([0|1|6|7|8|9]).{2}-?([0-9]{3,4}).-?([0-9]{4})$/i,
                    message: "휴대폰번호를 제대로 입력해주세요",
                  },
                })}
                onChange={onDataChange}
              />
              {errors.user_phone && <p>{errors.user_phone.message}</p>}
              <label className="accountLabel">주소</label>
              <input
                type="text"
                style={{ display: "inline-block", width: "80px" }}
                className="data.user_zonecode"
                required
                placeholder=" 우편번호"
                value={data.user_zonecode}
                {...register("data.user_zonecode", {
                  required: "우편번호를 입력해주세요  ",
                })}
                onClick={handleOpen}
              />

              <input
                type="text"
                style={{
                  display: "inline",
                  marginLeft: "20px",
                  width: "345px",
                }}
                className="user_address"
                required
                placeholder="주소"
                value={data.user_address}
                {...register("user_address", {
                  required: "주소를 입력해주세요",
                })}
              />
              <input
                style={{ display: "block" }}
                className="user_address_detail"
                required
                placeholder=" 상세주소를 입력해주세요"
                defaultValue={data.user_address_detail}
                {...register("user_address_detail", {
                  required: "상세주소를 입력해주세요 ",
                })}
                onChange={onDataChange}
              />

              <button
                type="submit"
                style={{ margin: "0 auto" }}
                value="회원가입"
              />
              <Test
                handleClose={handleClose}
                handlePostCode={handlePostCode}
                modalStyle={modalStyle}
                open={open}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
