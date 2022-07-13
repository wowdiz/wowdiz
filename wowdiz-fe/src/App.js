import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import FundingList from "./pages/funding/list/FundingList";
import MyPage from "./pages/user/mypage/MyPage";
import AdminLayout from './layout/AdminLayout';
import { MakerOpenProject } from './pages/maker';
import {AdminHome, AdminMember, AdminFunding, AdminFundingDetail} from './pages/admin';
import "./style/reset.css";
import SupportBoard from "./pages/support/supportboard/SupportBoard";
import FundingDetail from "./pages/funding/detail/FundingDetail";
import QNA from "./pages/support/qna/QNA";
import DetailMain from "./pages/funding/detail/DetailMain";
import DetailNews from "./pages/funding/detail/DetailNews";
import DetailCommunity from "./pages/funding/detail/DetailCommunity";
import DetailInfo from "./pages/funding/detail/DetailInfo";
import Notice from "./pages/support/notice/Notice";
import Event from "./pages/support/event/Event";
import FAQ from "./pages/support/faq/FAQ";

import Test from "./pages/user/register/AddressApi";

import RegisterForm from "./pages/user/register/RegisterForm";

// 최초 작업자: 권능
// 2022-06-29
// 리액트 프로젝트 구조 및 레이아웃 구조
function App() {


  return (
    <Routes>
      {/* 메인레이아웃 */}

        <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="maker/open_project" element={<MakerOpenProject/>}/>

        {/*펀딩페이지*/}
        <Route path="/funding" element={<FundingList />} />
        <Route path="/fundingdetail" element={<FundingDetail />}>
          <Route path="/fundingdetail" element={<DetailMain />} />
          <Route path="/fundingdetail/news" element={<DetailNews />} />
          <Route path="/fundingdetail/comm" element={<DetailCommunity />} />
          <Route path="/fundingdetail/info" element={<DetailInfo />} />
        </Route>

        <Route path="/mypage" element={<MyPage />} />
        {/*고객센터페이지*/}
        <Route path="/supportboard" element={<SupportBoard />}>
          <Route path="/supportboard" element={<Notice />} />
          <Route path="/supportboard/event" element={<Event />} />
          <Route path="/supportboard/faq" element={<FAQ />} />
          <Route path="/supportboard/qna" element={<QNA />} />
        </Route>
      </Route>

      {/* 로그인 */}
      <Route path="/login" element={<Login />} />
      <Route path="/test" element={<Test />} />

      {/* 회원가입 */}
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/register_join" element={<Register />} />
      <Route path="/login" element={<Login />} />

      {/* 회원가입 */}
      <Route path="/register" element={<Register />} />

      {/* 운영자레이아웃 */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminHome />} />
        <Route path="/admin/funding" element={<AdminFunding />} />
        <Route path="/admin/funding/detail" element={<AdminFundingDetail />} />
        <Route path="/admin/member" element={<AdminMember />} />
      </Route>
    </Routes>
  );
}

export default App;
