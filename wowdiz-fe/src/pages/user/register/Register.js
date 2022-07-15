import "../../../style/register.css";
import React, { useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import Test from "./AddressApi";
import { margin, style } from "@mui/system";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { height } from "@mui/system";
import { Elderly } from "@mui/icons-material";

const RegisterTest = () => {
  // react-hook-form 함수
  const {
    register,
    watch,
    handleSubmit,
    getValues,
    onBlur,
    onChange,
    trigger,
    formState: { errors },
  } = useForm();

  ///이메일 중복확인
  const [user_emailCheck, setUser_emailCheck] = useState(null);
  const checkUrl = "http://localhost:9150/" + "api/duplicateCheck";
  const comfrimUrl = "http://localhost:9150/" + "api/emailConfirm";
  //이메일 인증번호
  const [emailAuth, setEmailAuth] = useState();
  //입력된 이메일
  const data_email = getValues("user_email");
  const data_key = getValues("email_confirm");
  //중복이메일 체크 및 이메일 인증 메세지 보내기
  const email_check_button = (e) => {
    //이메일 유효성 체크
    const emailExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    //인증번호
    const email_confirm = document.getElementById("email_confirm");
    if (data_email === "") {
      alert("이메일을 입력해주세요");
    } else if (!emailExp.test(data_email)) {
      alert("이메일 형식에 맞추어 써주세요 ");
    } else {
      axios.post(checkUrl, { user_email: data_email }).then((res) => {
        console.log(res);
        if (res.data === "cofirm") {
          setUser_emailCheck(false);
          alert("이미 사용중인 이메일입니다.");
        } else if (res.data === "") {
          setUser_emailCheck(false);
          alert("이메일을 입력해주세요.");
        } else if (res.data === "pass") {
          setUser_emailCheck(true);
          alert("인증번호를 확인해주세요!");
        } else {
          alert("인증번호가 재전송되었습니다..");
        }
        if (user_emailCheck === true) {
          email_confirm.focus();
        }
      });
    }
  };

  const authCofirm = (e) => {};

  // 비밀번호 확인
  const user_password = useRef();
  user_password.current = watch("user_password");

  const onSubmit = (data) => {
    console.log(data);

    // const url = "http://localhost:9150/" + "api/signup";
    // axios.post(url, data).then((res) => {
    //   alert("insert 성공");
    // });
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
              onBlur: () => {
                trigger("user_name");
              },
            })}
          />
          {errors.user_name && <p>{errors.user_name.message}</p>}
          <label className="accountLabel">Email</label>
          <div className="user_email_box">
            <input
              id="user_email"
              className="user_email"
              style={{ maxWidth: "75%" }}
              placeholder="이메일을 입력해주세요"
              required
              {...register("user_email", {
                required: <p>이메일을 입력해주세요</p>,
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                  message: <p>이메일 형식에 맞게 입력해주세요</p>,
                },
                validate: {
                  email_cheack: (value) =>
                    user_emailCheck === null ? (
                      <p> 중복확인을 해주세요</p>
                    ) : user_emailCheck === false ? (
                      <p>이미 가입 되어있는 이메일입니다</p>
                    ) : (
                      true
                    ),
                },
                onBlur: () => {
                  trigger("user_email");
                },
              })}
            />
            <button
              type="button"
              onClick={() => {
                email_check_button();
              }}
              onBlur={() => {
                trigger("user_email");
              }}
            >
              <b>인증하기</b>
            </button>
          </div>
          {(errors.user_email && errors.user_email.message) ||
            (user_emailCheck && (
              <p style={{ color: "green" }}>
                사용 가능한 이메일입니다. 인증번호를 입력해주세요
              </p>
            ))}
          {user_emailCheck && (
            <div style={{ display: { emailAuth } }}>
              <label
                className="accountLabel"
                style={{ display: "flex", marginTop: "15px" }}
              >
                이메일 인증번호 입력
              </label>
              <div className="user_email_box">
                <input
                  id="email_confirm"
                  className="email_confirm"
                  style={{ maxWidth: "75%" }}
                  placeholder="인증번호를 입력해주세요"
                  required
                  {...register("email_confirm", {
                    required: <p>이메일 인증번호를 입력해주세요.</p>,
                    validate: (value) => value === emailAuth,
                  })}
                />

                <button
                  type="button"
                  onClick={() => {
                    trigger("email_confirm");
                    authCofirm();
                  }}
                  onBlur={() => {
                    trigger("email_confirm");
                  }}
                >
                  <b>인증확인</b>
                </button>
              </div>
              {errors.email_confirm &&
                errors.email_confirm.type === "validate" && (
                  <p>인증번호가 일치하지 않습니다.</p>
                )}
            </div>
          )}
          <label className="accountLabel">비밀번호</label>
          <input
            id="user_password"
            className="user_password"
            type="password"
            required
            {...register("user_password", {
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
                value: /^(?=.*\d)(?=.*[a-zA-ZS]).{6,}/,
                message: "영문, 숫자를 혼용하여 입력해주세요..",
              },
              onChange: () => {
                trigger("user_password");
              },
              onBlur: () => {
                trigger("user_password");
              },
            })}
          />
          {errors.user_password && <p>{errors.user_password.message}</p>}
          <label className="accountLabel">비밀번호 확인</label>
          <input
            className="password_confirm"
            type="password"
            required
            {...register("password_confirm", {
              required: "비밀번호를 한번 더해주세요",
              validate: (value) => value === user_password.current,
              onChange: () => {
                trigger("password_confirm");
              },
              onBlur: () => {
                trigger("password_confirm");
              },
            })}
          />
          {errors.password_confirm && <p>{errors.password_confirm.message}</p>}
          {errors.password_confirm &&
            errors.password_confirm.type === "validate" && (
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
              onBlur: () => {
                trigger("user_nickname");
              },
            })}
          />
          {errors.user_nickname && <p>{errors.user_nickname.message}</p>}
          <label className="accountLabel">휴대폰 번호</label>
          <input
            style={{ display: "block" }}
            className="user_phone"
            required
            placeholder="휴대폰번호를 입력해주세요  ex)010-0000-0000"
            {...register("user_phone", {
              required: "휴대폰번호를 입력해주세요",
              pattern: {
                value:
                  /^01([0|1|6|7|8|9]{0}){0}.?[-]?([0-9]{3}).?[-]?([0-9]{4})$/,
                message: "휴대폰번호를 제대로 입력해주세요",
              },
              onBlur: () => {
                trigger("user_phone");
              },
            })}
          />
          {errors.user_phone && <p>{errors.user_phone.message}</p>}
          <label className="accountLabel">생년월일</label>
          <input
            type="date"
            className="user_birthday"
            required
            {...register("user_birthday", {
              required: "생년월일을 입력해주세요 ",
              onBlur: () => {
                trigger("user_birthday");
              },
            })}
          />
          {errors.user_birthday && <p>{errors.user_birthday.message}</p>}
          <label className="accountLabel">성별</label>
          <Select
            className="user_gender"
            required
            defaultValue=""
            {...register("user_gender", {
              required: "성별을 입력해주세요",
              onChange: () => {
                trigger("user_gender");
              },
            })}
          >
            <MenuItem className="men" value="M">
              남자
            </MenuItem>
            <MenuItem className="girl" value="F">
              여자
            </MenuItem>
          </Select>
          {errors.user_gender && <p>{errors.user_gender.message}</p>}
          <button type="submit" style={{ margin: "0 auto" }}>
            <b>회원가입</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterTest;
