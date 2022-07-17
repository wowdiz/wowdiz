import "../../../style/register.css";
import React, { useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { border, color } from "@mui/system";
import { useScrollTrigger } from "@mui/material";

const RegisterTest = () => {
  // react-hook-form 함수
  const el = document.getElementById("user_email");
  const user_emails = useRef(null);
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onTocuched, onBlur, onSubmit" });

  ///이메일 중복확인
  const [data, setData] = useState({
    user_email: "",
    certipicate: "",
  });
  // const [user_email, setUser_email] = useState("");
  const [user_emailCheck, setUser_emailCheck] = useState();

  // 이메일 중복확인
  const checkUrl = "http://localhost:9150/" + "api/duplicateCheck";
  // ?user_email=" +
  // data.user_email;

  const onDataChange = (e) => {
    setData({
      ...data,
      user_email: e.target.value,
    });
  };
  const email_check_button = (e) => {
    console.log(data.user_email);
    // e.preventDefault(); //기본이벤트(submit이 action으로 넘어가는것)를 무효화
    if (data.user_email === "") {
      alert("이메일을 입력해주세요");
    } else {
      axios.post(checkUrl, data).then((res) => {
        console.log(res);
        if (res.data === 1) {
          setUser_emailCheck(false);

          alert("이미 사용중인 이메일입니다.");
          trigger("user_email");
        } else if (res.data === "") {
          setUser_emailCheck(false);

          alert("이메일을 입력해주세요.");
          trigger("user_email");
        } else {
          setUser_emailCheck(true);
          alert("사용가능");
          trigger("user_email");
        }
      });
    }
    el.focus();

    // setTimeout(el.focus(), 1000);
    // setTimeout(el.onblur(), 100);
  };

  // 비밀번호 확인
  const user_pwd = useRef();
  user_pwd.current = watch("user_pwd");

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
          {errors.user_name && <p>{errors.user_name.message}</p>}
          <label className="accountLabel">Email</label>
          <div className="user_email_box">
            <input
              id="user_email"
              name="user_email"
              style={{ maxWidth: "75%" }}
              placeholder="이메일을 입력해주세요"
              required
              ref={user_emails}
              onKeyUp={onDataChange}
              defaultValue={data.user_email}
              {...register("user_email", {
                required: <p>이메일을 입력해주세요</p>,
                pattern: {
                  value: /^\S+@\S+$/,
                  message: <p>이메일 형식에 맞게 입력해주세요</p>,
                },
                validate: {
                  email_cheack: (value) =>
                    user_emailCheck === false ? (
                      <p> 중복확인을 해주세요</p>
                    ) : (
                      (true,
                      (
                        <p style={{ color: "green" }}>
                          사용가능한 아이디입니다.
                        </p>
                      ))
                    ),
                },
              })}
            />
            <button type="button" onClick={email_check_button}>
              인증하기
            </button>
          </div>
          {errors?.user_email?.message}
          {/* {user_emailCheck && (
            <p style={{ color: "green" }}>"사용 가능한 아이디입니다."</p>
          )} */}
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
              required: "비밀번호를 한번 더해주세요",
              validate: (value) => value === user_pwd.current,
            })}
          />
          {
            errors.pwd_confirm && <p>{errors.pwd_confirm.message}</p>
            // errors.pwd_confirm && errors.pwd_confirm.type === "validate" && (
            //   <p>비밀번호가 일치하지 않습니다.</p>
            // )
          }
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
                value:
                  /^01([0|1|6|7|8|9]{0}){0}.?[-]?([0-9]{3}).?[-]?([0-9]{4})$/,
                message: "휴대폰번호를 제대로 입력해주세요",
              },
            })}
          />
          {errors.user_phone && <p>{errors.user_phone.message}</p>}
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
      </div>
    </div>
  );
};

export default RegisterTest;
