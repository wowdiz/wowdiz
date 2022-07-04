import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import FundingList from "./pages/funding/list/FundingList";
import MyPage from "./pages/user/mypage/MyPage";
import FAQ from "./pages/support/faq/FAQ";
import QNA from "./pages/support/qna/QNA";

import "./style/reset.css";

// 최초 작업자: 권능
// 2022-06-29
// 리액트 프로젝트 구조 및 레이아웃 구조
function App() {
  return (
    <Routes>
      {/* 메인레이아웃 */}
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/funding" element={<FundingList />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/support" element={<FAQ />} />
        <Route path="/qna" element={<QNA />} />
      </Route>
      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      {/* 회원가입 */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
