import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import user from "../../assets/images/user/default_image.jpg";
import UserService from "../../service/UserService";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AxiosService from "../../service/AxiosService";
import { fontWeight } from "@mui/system";

const settings = ["마이페이지", "내가 펀딩한 목록", "로그아웃"];

const LogoutComponent = ({ loadUserName }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const activeStyle = {
    background: "red",
    fontWeight: "700",
    color: "black",
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigation = useNavigate();

  // 유저정보
  const [userDataLoad, setUserDataLoad] = useState({
    userId: "",
    name: "",
    nickname: "",
    user_email: "",
  });

  const userInfoload = () => {
    const uri =
      "/api/user/info?user_email=" + localStorage.getItem("authenticatedUser");
    AxiosService.get(uri)
      .then((res) => {
        setUserDataLoad({
          ...userDataLoad,
          userId: res.data.user_id,
          name: res.data.user_name,
          nickname: res.data.user_nickname,
          uesr_email: res.data.user_email,
          user_phoen: res.data.user_phone,
        });
      })
      .catch((err) => {
        alert("권한이 없습니다. 다시 로그인 해주세요.");
        UserService.logout();
      });
  };
  useEffect(() => {
    userInfoload();
    return () => {};
  }, []);

  return (
    <div className="login_user_wrap">
      <div style={{ wiwdth: "80px", display: "inline", overflow: "hidden" }}>
        <p
          className="user_bar_login_name"
          style={{
            width: "100px",
            display: "inline",
            overflow: "hidden",
            whiteSpace: "normal",
            marginRight: "15px",
          }}
        >
          {userDataLoad.nickname}
        </p>
      </div>

      <div className="user_bar_login">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={user} />
            </IconButton>
          </Tooltip>
          <Menu
            style={{ display: "block" }}
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))} */}
            <NavLink
              to="/user/mypage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{settings[0]}</Typography>
              </MenuItem>
            </NavLink>
            <MenuItem key={settings[1]} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[1]}</Typography>
            </MenuItem>
            <MenuItem key={settings[2]} onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={UserService.logout}>
                {settings[2]}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
      </div>
    </div>
  );
};

export default LogoutComponent;
