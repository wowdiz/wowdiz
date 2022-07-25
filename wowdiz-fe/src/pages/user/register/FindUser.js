import React, { useState } from "react";
import FindUserId from "../../../components/user/FindUserId";
import FindUserPassword from "../../../components/user/FindUserPassword";
import "../../../style/find_user.css";
const FindUser = () => {
  // ID / PASSWORD찾기 창 열기 | 닫기
  const [idFindOpen, setIdFindOpen] = useState("id");

  return (
    <div style={{ display: "block" }}>
      <div className="user_find_wrap">
        <div className="user_find_title">
          <h2 className="user_find_subject">아이디∙비밀번호 찾기</h2>
          <ul>
            <label
              onClick={() => {
                setIdFindOpen("id");
                console.log(idFindOpen);
              }}
            >
              <li
                className={
                  idFindOpen === "id"
                    ? "user_find_title_user_select"
                    : "user_find_title_user"
                }
              >
                <p>아이디 찾기</p>
              </li>
            </label>
            <label
              onClick={() => {
                setIdFindOpen("password");
                console.log(idFindOpen);
              }}
            >
              <li
                className={
                  idFindOpen === "password"
                    ? "user_find_title_user_select"
                    : "user_find_title_user"
                }
              >
                <p>비밀번호 찾기</p>
              </li>
            </label>
          </ul>
        </div>
      </div>
      <div className="user_content_wrap">
        {idFindOpen === "id" ? <FindUserId /> : <FindUserPassword />}
      </div>
    </div>
  );
};

export default FindUser;
