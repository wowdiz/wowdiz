import { margin } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/images/user/default_image.jpg";
import AxiosService from "../../service/AxiosService";
import UserService from "../../service/UserService";
import CustomModal from "./CustomModal";

const UserInfoUpdate = ({ userDataLoad }) => {
  // 카테고리 목록
  // 데이터를 넣을 빈배열
  const [checkedLikeList, setCheckedLikeList] = useState([]);
  const userCheck = userDataLoad.category_id;

  const likeList = [
    "교육∙키즈",
    "홈리빙∙디자인소품",
    "스포츠∙모빌리티",
    "반려동물",
    "패션∙잡화∙뷰티",
    "공연∙컬쳐",
    "출판",
    "테크∙가전",
  ];

  // 1️⃣ onChange함수를 사용하여 이벤트 감지, 필요한 값 받아오기
  const onCheckedLikeList = (checked, item) => {
    if (checked) {
      setCheckedLikeList([...checkedLikeList, item]);
    } else if (!checked) {
      setCheckedLikeList(checkedLikeList.filter(item));
    }
  };

  // react-hook-form 함수
  const {
    register,
    watch,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const [user_nicknameCheck, setUser_nicknameCheck] = useState(null);
  const userNickName = userDataLoad.nickname;
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState();
  const [modalContent, setModalContent] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const nicknameCheck = () => {
    const nickname = getValues("user_nickname");
    AxiosService.post("/api/user/nicknameCheck", {
      user_nickname: nickname,
    }).then((res) => {
      if (res.data === false) {
        setUser_nicknameCheck(false);
        handleOpen();
        setModalTitle("아이디 중복확인");
        setModalContent("중복된 아이디입니다.");
      } else {
        setUser_nicknameCheck(true);
        handleOpen();
        setModalTitle("아이디 중복확인");
        setModalContent("사용가능한 닉네임입니다.");
      }
    });
  };

  const onSubmit = (data) => {
    const check = data.user_nickname;
    const userlikeList = JSON.stringify(checkedLikeList);
    if (check === userNickName) {
      const userInfoChange = {
        user_id: userDataLoad.user_id,
        user_email: data.user_email,
        user_phone: data.user_phone,
        category_id: userlikeList,
      };
      const url = "api/user/info/change";
      AxiosService.post(url, userInfoChange).then((res) => {
        setUser_nicknameCheck(true);
        handleOpen();
        setModalTitle("정보변경");
        setModalContent("정보변경이 완료되었습니다.");
        window.location.reload();
      });
    } else if (user_nicknameCheck === false) {
      setUser_nicknameCheck(false);
      handleOpen();
      setModalTitle("닉네임 중복화인");
      setModalContent("닉네임이 중복확인 후 변경해주세요 ");
    } else if (user_nicknameCheck === true) {
      const userInfoChange = {
        user_id: userDataLoad.user_id,
        user_email: data.user_email,
        user_phone: data.user_phone,
        user_nickname: data.user_nickname,
        category_id: userlikeList,
      };
      const url = "api/user/info/change";
      AxiosService.post(url, userInfoChange).then((res) => {
        setUser_nicknameCheck(true);
        handleOpen();
        setModalTitle("정보변경");
        setModalContent("정보변경이 완료되었습니다.");
        window.location.reload();
      });
    }
  };
  const [isHovering, setIsHovering] = useState(0);

  useEffect(() => {
    // userInfoload();
  }, []);
  return (
    <div>
      <div className="user_info_change">
        <h2 className="user_info_tile">개인정보 변경 </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="user_profile_image_box"
            style={{ boder: "2px solid black" }}
          >
            <img
              src={Profile}
              alt=""
              className="profile_image_update"
              onMouseOver={() => setIsHovering(1)}
              onMouseOut={() => setIsHovering(0)}
            />
            {isHovering ? (
              <p className="user_profile_image_update_text">이미지 변경</p>
            ) : (
              ""
            )}
            <h3> {userDataLoad.name}</h3>
          </div>
          <div className="user_update_boxs">
            <label className="user_update_label">닉네임</label>
            <input
              defaultValue={userDataLoad.nickname}
              className="user_subject_update"
              placeholder="닉네임을 입력해주세요"
              required
              onKeyUp={(e) => {
                if (e.target.value !== null) {
                  setUser_nicknameCheck(false);
                  //   console.log("user" + userCheck);

                  //   console.log(checkedLikeList);
                }
              }}
              {...register("user_nickname", {
                required: "닉네임을입력해주세요",
                onBlur: () => {
                  trigger("user_nickname");
                },
              })}
            />
            <button
              type="button"
              className="user_nickname_update_button"
              onClick={() => {
                nicknameCheck();
              }}
              onBlur={() => {
                trigger("user_nickname");
              }}
            >
              중복확인
            </button>
            {errors.user_nickname && (
              <p className="error_message">{errors.user_nickname.message}</p>
            )}
          </div>
          <div className="user_update_boxs">
            <label className="user_update_label">휴대폰 번호</label>
            <input
              defaultValue={userDataLoad.phone}
              className="user_subject_update"
              required
              maxLength="13"
              placeholder="ex)010-0000-0000"
              {...register("user_phone", {
                required: "휴대폰번호를 입력해주세요",
                pattern: {
                  value:
                    /^01([0|1|6|7|8|9]{0}).([-])([0-9]{2,3}).([-])([0-9]{4})$/,
                  message: "휴대폰번호를 제대로 입력해주세요",
                },
                onBlur: () => {
                  trigger("user_phone");
                },
              })}
            />
            {errors.user_phone && (
              <p className="error_message">{errors.user_phone.message}</p>
            )}
          </div>
          <div className="user_update_boxs">
            <label className="user_update_label">관심사</label>
            <div className="like_box_wrap">
              {likeList &&
                likeList.map((item, idx) => (
                  <div className="like_box" key={idx}>
                    <input
                      type="checkbox"
                      className="like_check_box"
                      value={item}
                      onChange={(e) => {
                        onCheckedLikeList(e.target.checked, e.target.value);
                        console.log(checkedLikeList);
                      }}
                      //  배열에 data가 있으면 true, 없으면 false
                      // defaultChecked={
                      //   checkedLikeList.includes(item) ? true : false
                      // }
                      defaultChecked={userCheck.includes(item) ? true : false}
                    />
                    <p className="like_text">{item}</p>
                  </div>
                ))}
            </div>
          </div>
          <button className="user_update_button">변경하기</button>
        </form>
      </div>

      {/* 오류 및 확인메세지 */}
      <CustomModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        modalTitle={modalTitle}
        modalContent={modalContent}
      />
    </div>
  );
};

export default UserInfoUpdate;
