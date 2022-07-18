import React from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import user from "../../assets/images/user/default_image.jpg";
import AuthenticationService from "../../Service/AuthenticationService";
import UserService from "../../service/UserService";

const settings = ["마이페이지", "내가 펀딩한 목록", "로그아웃"];

const LogoutComponent = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="login_wrap">
      <p className="user_bar_login_name">기민이님 </p>
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
            <MenuItem key={settings[0]} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{settings[0]}</Typography>
            </MenuItem>
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
