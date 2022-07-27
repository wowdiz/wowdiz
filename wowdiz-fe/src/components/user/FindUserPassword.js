import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosService from "../../service/AxiosService";
import Loading from "../loading/Loading";
import CustomModal from "./CustomModal";

const FindUserPassword = () => {
  //정보 handler
  const [handler, setHandler] = useState({
    modalTitle: "",
    contetnt: "",
    passwordFind: false,
    user_email: "",
    passwordChange: false,
  });

  // 경고창 컨트롤
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  //로딩 창 관리
  const [loading, setLoading] = useState(null);

  // React-hook-form 양식
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm();

  // 비밀번호 확인
  const user_password = useRef();
  user_password.current = watch("user_password");
  // 이메일 인증번호 받기
  const onSubmit = (data) => {
    setLoading(true);
    const url = "/api/user/find/password?user_email=" + data.user_email;
    AxiosService.get(url)
      .then((res) => {
        if (res.data === 1) {
          setHandler({
            ...handler,
            modalTitle: "인증번호 전송",
            content: data.user_email + " 에서 인증번호를 확인해주세요!",
            passwordFind: true,
            user_email: data.user_email,
          });
          handleOpen();
          setValue("user_email", "");
        } else if (res.data === 2) {
          setHandler({
            ...handler,
            modalTitle: "카카오 유저",
            content: data.user_email + " 은 카카오로 로그인해주세요 .",
            passwordFind: false,
          });
          handleOpen();
        } else if (res.data === 4) {
          setHandler({
            ...handler,
            modalTitle: "네이버 유저",
            content: data.user_email + " 은 네이버로 로그인해주세요 .",
            passwordFind: false,
          });
          handleOpen();
        } else {
          setHandler({
            ...handler,
            modalTitle: "등록되지 않은 이메일",
            content: data.user_email + " 은 가입되어 있지 않습니다 .",
            passwordFind: false,
          });
          handleOpen();
        }
        setLoading(false);
      })

      .catch((err) => {
        console.log("error:" + err);
      });
  };
  // 인증번호 확인 메서드
  const confirmSubmit = (data) => {
    const cofirmUrl = "api/user/emailConfirm";
    AxiosService.post(cofirmUrl, {
      user_email: handler.user_email,
      authentication_key: data.email_confirm,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          setHandler({
            ...handler,
            modalTitle: "인증번호 확인 와료",
            content: " 변경할 비밀번호를 입력해주세요 ",
            passwordFind: null,
          });
          handleOpen();
          setValue("user_email", handler.user_email);
        } else {
          setHandler({
            ...handler,
            modalTitle: "인증번호 오류",
            content: handler.user_email + "에서 재확인 후 입력부탁드립니다.",
          });
          handleOpen();
        }
      })
      .catch((err) => {
        console.log("error:" + err);
      });
  };

  const navigation = useNavigate();

  const changePassword = (data) => {
    console.log(data);
    const url = "/api/user/change/password";
    AxiosService.post(url, data)
      .then((res) => {
        setHandler({
          ...handler,
          modalTitle: "비밀번호 변경 완료",
          content:
            data.user_email +
            "님 비밀번호 변경되었습니다. 잠시 후 로그인페이지로 이동됩니다.",
        });
        handleOpen();
        setTimeout(() => {
          navigation("../login");
        }, 2500);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="user_find_content">
      <div className="user_find_box">
        {handler.passwordFind === false ? (
          <>
            <h2>비밀번호 찾기</h2>
            <p className="user_find_text">
              가입하셨던 이메일 계정을 입력하시면
              <br />
              인증번호를 발송드리고 인정번호를 입력하여 일치하면
              <br />
              비밀번호 변경이 가능합니다.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="user_find_id_from"
            >
              <input
                className="user_email"
                placeholder="이메일을 입력해주세요"
                required
                {...register("user_email", {
                  required: <p>이메일을 입력해주세요</p>,
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                    message: <p>이메일 형식에 맞게 입력해주세요</p>,
                  },
                })}
              />
              <button>
                <b> 이메일 확인하기 </b>
              </button>
            </form>
          </>
        ) : handler.passwordFind === true ? (
          <>
            <h2>인증번호 입력</h2>
            <p className="user_find_text">
              인증번호가 전송되었습니다.
              <br />
              이메일 확인후 입력부탁드립니다.
              <br />
            </p>
            <form
              onSubmit={handleSubmit(confirmSubmit)}
              className="user_find_id_from"
            >
              <input
                id="email_confirm"
                className="email_confirm"
                placeholder="인증번호를 입력해주세요"
                defaultValue=""
                required
                {...register("email_confirm", {
                  required: <p>이메일 인증번호를 입력해주세요.</p>,
                })}
              />
              <button>
                <b> 인증번호 입력 </b>
              </button>
            </form>
          </>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(changePassword)}
              className="user_find_id_from"
            >
              <h2>비밀번호 변경</h2>
              <p className="user_find_text" style={{ display: "block" }}>
                변경할 비밀번호를 입력해주세요.
                <br />
                <p
                  className="user_find_text"
                  style={{ display: "inline-block", marginRight: "5px" }}
                >
                  비밀번호는
                </p>
                <p
                  className="user_find_text"
                  style={{ color: "red", display: "inline-block" }}
                >
                  6자이상 영문,숫자를 혼용하여 입력해주세요
                </p>
              </p>
              <label className="accountLabel" style={{ marginTop: "-25px" }}>
                변경할 비밀번호
              </label>
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
              {errors.user_password && (
                <p style={{ color: "red" }}>{errors.user_password.message}</p>
              )}
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
              {errors.password_confirm && (
                <p style={{ color: "red" }}>
                  {errors.password_confirm.message}
                </p>
              )}
              {errors.password_confirm &&
                errors.password_confirm.type === "validate" && (
                  <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
                )}
              <button>
                <b> 비밀번호 변경</b>
              </button>
            </form>
          </>
        )}
      </div>
      <CustomModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        modalTitle={handler.modalTitle}
        modalContent={handler.content}
      />
      {loading && (
        <Loading type="spokes" color="black" message="이메일 전송중" />
      )}
    </div>
  );
};

export default FindUserPassword;
