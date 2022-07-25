import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../../service/AxiosService";
import CustomModal from "./CustomModal";

const FindUserId = () => {
  const [modal, setModal] = useState({
    modalTitle: "",
    contetnt: "",
    idFind: false,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  // React-hook-form 양식
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigate();
  const login = (e) => {
    navigation("../login");
  };
  // 이메일 찾기 버튼 클릭
  const onSubmit = (data) => {
    const url = "api/user/find/id?user_email=" + data.user_email;
    AxiosService.get(url)
      .then((res) => {
        if (res.data === 1) {
          setModal({
            ...modal,
            modalTitle: "이메일 확인",
            content: data.user_email + " 은  일반유저로만 가입된 이메일입니다.",
            idFind: true,
          });
          handleOpen();
        } else if (res.data === 2) {
          setModal({
            ...modal,
            modalTitle: "이메일 확인",
            content: data.user_email + " 은  Kakao로만 가입된 이메일입니다.",
            idFind: true,
          });
          handleOpen();
        } else if (res.data === 3) {
          setModal({
            ...modal,
            modalTitle: "이메일 확인",
            content:
              data.user_email +
              " 은  일반유저 및 Kakao 통합 가입된 이메일입니다.",
            idFind: true,
          });
          handleOpen();
        } else if (res.data === 0) {
          setModal({
            ...modal,
            modalTitle: "이메일 확인",
            content: data.user_email + " 은 등록된 이메일이 없습니다.",
          });
          handleOpen();
        } else {
          setModal({
            ...modal,
            modalTitle: "이메일 확인",
            content: "오류입니다 . 문의주세요 ",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="user_find_content">
      <div className="user_find_box">
        {modal.idFind === false ? (
          <>
            <h2>아이디 찾기</h2>
            <p className="user_find_text">
              와우디즈는 이메일을 아이디로 사용합니다.
              <br />
              소유하고 계신 계정을 입력해보세요.
              <br />
              가입여부를 확인해드립니다.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="user_find_id_from"
            >
              <input
                type="email"
                className="user_email"
                placeholder="이메일을 입력해주세요"
                required
                {...register("user_email", {
                  required: (
                    <p style={{ color: "red" }}>이메일을 입력해주세요</p>
                  ),
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                    message: (
                      <p style={{ color: "red" }}>
                        이메일 형식에 맞게 입력해주세요
                      </p>
                    ),
                  },
                })}
              />
              {errors.user_email && errors.user_email.message}
              <button>
                <b> 이메일 확인하기 </b>
              </button>
            </form>
          </>
        ) : (
          <>
            <h2> {modal.content} </h2>
            <button
              type="button"
              className="find_login_button"
              onClick={(e) => {
                login(e);
              }}
            >
              <b>로그인하러가기</b>
            </button>
          </>
        )}
        <CustomModal
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          modalTitle={modal.modalTitle}
          modalContent={modal.content}
        />
      </div>
    </div>
  );
};

export default FindUserId;
