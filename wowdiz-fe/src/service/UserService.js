import AxiosService from "./AxiosService";

// 최초 작업자: 권능
// 2022-07-16
class UserService {
  login = (userData) => {
    AxiosService.post("/api/authenticate", userData, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        localStorage.setItem("authenticatedUser", userData.user_email);
      })
      .catch((error) => {
        console.log("login fail");
        console.log(error);
      });
  };

  logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("authenticatedUser");
    window.location.reload();
  };

  isLoggedIn = () => {
    const jwtToken = localStorage.getItem("jwtToken");
    console.log("check login status");
    if (jwtToken) {
      return true;
    }
    return false;
  };
}

export default new UserService();
