import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import FundingList from "./pages/funding/list/FundingList";
import MyPage from "./pages/user/mypage/MyPage";
import AdminLayout from "./layout/AdminLayout";
import { MakerOpenProject, MakerSuccess } from "./pages/maker";
import {
  AdminHome,
  AdminMember,
  AdminFunding,
  AdminFundingDetail,
} from "./pages/admin";
import "./style/reset.css";
import SupportBoard from "./pages/support/supportboard/SupportBoard";
import FundingDetail from "./pages/funding/detail/FundingDetail";
import QNA from "./pages/support/qna/QNA";
import DetailMain from "./pages/funding/detail/DetailMain";
import DetailNews from "./pages/funding/detail/DetailNews";
import DetailCommunity from "./pages/funding/detail/DetailCommunity";
import DetailInfo from "./pages/funding/detail/DetailInfo";
import Notice from "./pages/support/notice/Notice";
import NoticeDetail from "./pages/support/notice/NoticeDetail";
import Event from "./pages/support/event/Event";
import FAQ from "./pages/support/faq/FAQ";
import Test from "./pages/user/register/AddressApi";
import RegisterForm from "./pages/user/register/RegisterForm";
import FundingReward from "./pages/funding/pay/FundingReward";
import QNAList from "./pages/support/qna/QNAList";
import QNADetail from "./pages/support/qna/QNADetail";

import SnsRegister from "./pages/user/register/SnsRegister";

import QNAAnswer from "./pages/support/qna/QNAAnswer";
import FAQWrite from "./pages/support/faq/FAQWrite";
import FAQUpdate from "./pages/support/faq/FAQUpdate";
import Write from "./components/CKEeditor/Write";
import FindUser from "./pages/user/register/FindUser";
import UserLayout from "./layout/UserLayout";

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
        <Route path="/funding/detail" element={<FundingDetail />}>
          <Route path="/funding/detail" element={<DetailMain />} />
          <Route path="/funding/detail/news" element={<DetailNews />} />
          <Route path="/funding/detail/comm" element={<DetailCommunity />} />
          <Route path="/funding/detail/info" element={<DetailInfo />} />
        </Route>
        {/* 펀딩 결제 */}
        <Route path="/funding/purchase" element={<FundingReward />}></Route>
        <Route path="/mypage" element={<MyPage />} />
        {/*고객센터페이지*/}
        <Route path="/supportboard" element={<SupportBoard />}>
          <Route path="/supportboard" element={<Notice />} />
          <Route path="/supportboard/noticedetail" element={<NoticeDetail />} />
          <Route path="/supportboard/event" element={<Event />} />
          <Route path="/supportboard/faqpage" element={<FAQ />} />
          <Route path="/supportboard/faqdetail/:faq_id" element={<FAQ />} />
          <Route path="/supportboard/faqdelete/:faq_id" element={<FAQ />} />
          <Route
            path="/supportboard/faqupdate/:faq_id"
            element={<FAQUpdate />}
          />
          <Route path="/supportboard/faqwrite" element={<FAQWrite />} />
          <Route path="/supportboard/qna" element={<QNA />} />
          <Route
            path="/supportboard/qnapage/:currentPage"
            element={<QNAList />}
          />
          <Route
            path="/supportboard/qnadetail/:inquiry_id"
            element={<QNADetail />}
          />
          <Route
            path="/supportboard/qnaanswer/:inquiry_id"
            element={<QNAAnswer />}
          />
        </Route>
        {/* 메이커 */}
        <Route path="maker/open_project" element={<MakerOpenProject />} />
        <Route path="maker/success" element={<MakerSuccess />} />
      </Route>

      {/* 로그인 */}

      <Route path="/test" element={<Test />} />

      {/* 회원가입  / 로그인  / 아이디 찾기 / 패스워드 찾기*/}
      <Route path="/user" element={<UserLayout />}>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<RegisterForm />} />
        <Route path="/user/register_join" element={<Register />} />
        <Route path="/user/snsregister_join" element={<SnsRegister />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/find" element={<FindUser />} />
      </Route>

      {/* 운영자레이아웃 */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="" element={<AdminHome />} />
        <Route path="/admin/funding" element={<AdminFunding />} />
        <Route path="/admin/funding/detail" element={<AdminFundingDetail />} />
        <Route path="/admin/member" element={<AdminMember />} />
      </Route>
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;
