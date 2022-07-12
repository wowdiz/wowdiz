import "../../../style/register.css";
import React, { useRef, useState } from "react";
import { get, useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AddressApi from "./AddressApi";

const RegisterTest = () => {
  // react-hook-form 함수
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 비밀번호 확인
  const user_pwd = useRef();
  // Api 주소값 저장
  const [address, setAddress] = useState({
    user_zipcode: "",
    user_address: "",
  });

  user_pwd.current = watch("user_pwd");

  // 주소 창 모달 OPEN
  const [open, setOpen] = React.useState(false);
  // 주소 모달창 OPEN
  const handleOpen = () => setOpen(true);
  // 주소 모달창 CLOSE
  const handleClose = () => setOpen(false);

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
    setAddress({
      ...address,
      user_address: fullAddress,
      user_zipcode: kakaoData.zonecode,
    });

    handleClose();
  };

  const onSubmit = (data) => {
    console.log(data);

    const url = "http://localhost:9150/" + "api/signup";
      axios.post(url, data).then((res) => {
        alert("insert 성공");
      });
      
  };

  return (
    <div className="register_page">
      <div className="register_page_wrap">
        <h2> 회원가입</h2>
        <p className="page-description">최소한의 정보를 받고 있습니다.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="register_page_form">
          <label className="accountLabel">이름</label>
          <input
            className="user_name"
            placeholder="이름 입력"
            {...register("user_name", {
              required: "이름을 입력해주세요",
              minLength: {
                value: 2,
                message: "2자 이상의 이름만 사용 가능합니다.",
              },
              maxLength: {
                value: 12,
                message: "12자 이하의 이름만 사용 가능합니다.",
              },
              pattern: {
                value: /^([가-힣])|([a-zA-Z])$/,
                message: "이름은 한글 또는 영문으로만 입력해주세요",
              },
            })}
          />
          {errors.user_email && <p>{errors.user_email.message}</p>}
          <label className="accountLabel">Email</label>
          <input
            className="user_email"
            style={{ display: "inline" }}
            placeholder="이메일을 입력해주세요"
            required
            {...register("user_email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^\S+@\S+$/,
                message: "이메일 형식에 맞게 입력해주세요",
              },
            })}
          />
          {errors.user_id && <p>{errors.user_id.message}</p>}
          <label className="accountLabel">비밀번호</label>
          <input
            className="user_pwd"
            type="password"
            required
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
            {...register("user_nickname", {
              required: "닉네임을 입력해주세요",
            })}
          />
          <label className="accountLabel">휴대폰 번호</label>
          <input
            style={{ display: "block" }}
            className="user_phone"
            required
            placeholder="휴대폰번호를 입력해주세요  ex)010-0000-0000"
            {...register("user_phone", {
              required: "휴대폰번호를 입력해주세요",
              pattern: {
                value: /^01([0|1|6|7|8|9]{0}).-?([0-9]{3,4}).-?([0-9]{4})$/i,
                message: "휴대폰번호를 제대로 입력해주세요",
              },
            })}
          />
          {errors.user_phone && <p>{errors.user_phone.message}</p>}
          <label className="accountLabel">주소</label>
          <input
            // type="text"
            style={{ display: "inline-block", width: "80px" }}
            className="user_zipcode"
            required
            placeholder=" 우편번호"
            value={address.user_zipcode}
            {...register("user_zipcode", {
              required: "우편번호를 입력해주세요  ",
            })}
            onClick={handleOpen}
          />
          <input
            type="text"
            style={{
              display: "inline",
            }}
            className="user_address"
            required
            placeholder="주소"
            value={address.user_address}
            {...register("user_address", {
              required: "주소를 입력해주세요",
            })}
          />
          <input
            style={{ display: "block" }}
            className="user_detail_address"
            required
            placeholder=" 상세주소를 입력해주세요"
            {...register("user_detail_address", {
              required: "상세주소를 입력해주세요 ",
            })}
          />
          <label className="accountLabel">생년월일</label>
          <input
            style={{ display: "block" }}
            className="user_birthday"
            required
            placeholder=" ex) 1993-12-15"
            {...register("user_birthday", {
              required: "생년월일을 입력해주세요 ",
            })}
          />
          <label className="accountLabel">성별</label>
          <select className="user_gender" required {...register("user_gender")}>
            <option defaultChecked>성별</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
          <button type="submit" style={{ margin: "0 auto" }}>
            회원가입
          </button>
        </form>
        <AddressApi
          handleClose={handleClose}
          handlePostCode={handlePostCode}
          open={open}
        />
      </div>
    </div>
  );
};

export default RegisterTest;