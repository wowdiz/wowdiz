/* eslint-disable react/jsx-pascal-case */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../../assets/images/test/7.jpg";
import banner2 from "../../assets/images/test/8.jpg";
import banner3 from "../../assets/images/test/9.jpg";
import banner4 from "../../assets/images/test/10.jpg";
import banner5 from "../../assets/images/test/11.jpg";
import banner6 from "../../assets/images/test/12.jpg";
import "../../style/home.css";
import rangking1 from "../../assets/images/main/rangking_1.png";
import rangking2 from "../../assets/images/main/rangking_2.png";
import rangking3 from "../../assets/images/main/rangking_3.png";
import Perference_funding from "../../components/main/Perference_funding";
import Banner from "../../components/main/Banner";
import back_image from "../../assets/images/main/project_create_back.jpg";
import Button from "@mui/material/Button";
import RankingView from "../../components/main/RankingView";
import SupportViewQna from "../../components/main/SupportViewQna";
import YoutubeLayout from "../../components/main/YoutubeLayout";
import qnaImage from "../../assets/images/main/qna_image.jpg";
import noticeImage from "../../assets/images/main/notice_image.jpg";
import eventImage from "../../assets/images/main/event_image.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosService from "../../service/AxiosService";
import { useScrollTrigger } from "@mui/material";
import MainFundingList from '../../components/main/MainFundingList';
import RankingView5 from "../../components/main/RankingView5";
import RankingView4 from "../../components/main/RankingView4";
import RankingView3 from "../../components/main/RankingView3";
import RankingView2 from "../../components/main/RankingView2";


// 최초 작업자: 이광호
// 2022-07-04
// 리액트 홈페이지 메인 프론트엔드

SwiperCore.use([Navigation, Pagination, Autoplay]); //

const Home = () => {
  const image1 = back_image;

  const navi = useNavigate();

  const [data,setData] = useState(null);

  useEffect(() => {
    const url = "/admin/mainList";
    AxiosService.get(url)
    .then(res => {
      console.log('성공');
      setData(res.data);
    })
  },[])

  console.log('data',data);

  const supportComponent =[
    {
      back_image:noticeImage,
      title:"공지사항",
      subject:"공지사항 게시판",
      subjectText:"정보 바로가기" 
    },
    {
      back_image:qnaImage,
      title:"Q & A",
      subject:"QNA 게시판",
      subjectText:"질문 바로가기" 
    },
    {
      back_image:eventImage,
      title:"EVENT",
      subject:"EVENT 게시판",
      subjectText:"이벤트 바로가기" 
    },
  ]

  const banner = [
    {
      img: banner1,
      ranking: rangking1,
      title: " 충전 셀카봉 삼각대를 하나로 인생샷 건지기 필수템",
      catagory: "가전",
      maker: "제이씨 컴퍼니",
      price: "15,000,000 원",
      percent: "150%",
      like: "15",
    },
    {
      img: banner2,
      ranking: rangking2,
      title: "10초면 청담동 미용실을 느낄수 있어요! 헤어시럽",
      maker: "뉴웨이브",
      price: "5,000,000 원",
      catagory: "뷰티",
      percent: "60%",
    },
    {
      img: banner3,
      ranking: rangking3,
      title: "여행&직장인 필수템 4대 100년 의료명가 가글",
      maker: "민아카데미",
      price: "1,000,000 원",
      catagory: "홈·리빙",
      percent: "30%",
    },
    {
      img: banner4,
      title: "10만원대 접는 스트래칭 마사지기 3D 파워에어셀로 마사지샵",
      price: "3,000,000 원",
      catagory: "가전",
      maker: "(주)수련",
      percent: "50%",
    },
    {
      img: banner5,
      title: "5일만에 37.5% 모공 쪼이는 5D 오디앰플 [8중 임상 화제]",
      price: "3,000,000 원",
      catagory: "뷰티",
      maker: "(주)케이티씨에스",
      percent: "50%",
    },
    {
      img: banner6,
      title: "39,000원으로 여러분의 여름을 책임지겠습니다",
      price: "3,000,000 원",
      catagory: "패션·잡화",
      maker: "(주)라티그래",
      percent: "60%",
    },
  ];

  return (
    <div className="main">
      {/* 슬라이드 배너 영역 */}
      <Banner data={banner} />
      {/* 취향맞춤 펀딩 및 실시간랭킹 펀딩 영역*/}
      <div className="main_line">
        {/* 취향 맟춤 펀딩 영역 */}
        <div className="preference_funding_form">
          <div className="preference_funding">
            <h2 className="preference_line">취향 맞춤 펀딩</h2>
            <p className="preference_line_sub">지금 함께 만드는 성공</p>
          </div>
          {/* {banner &&
            banner.map((data, idx) => (
              <Perference_funding data={data} idx={idx} key={idx} />
            ))} */}
            {
              data === null ? '' : data.map((item, idx) => (
                <MainFundingList data={item} idx={idx} key={item.project_id} />
              ))
            }
        </div>
        {/* 실시간 순위보기 영역 */}
        <div className="rangking_funding_form">
          <div className="rangking_funding">
            <h2 className="rangking_line">실시간 랭킹</h2>
            {/* <p className="rangking_line_sub">  Best of best </p>  */}
          </div>
          <p className="rangking_line_sub">베스트 오브 베스트</p>
          {/* 랭킹 view_메인 페이지 */}
          <RankingView />
          <RankingView2 />
          <RankingView3 />
          <RankingView4 />
          <RankingView5 />
        </div>
      </div>
      {/* 프로젝트 만들기 */}
      <div className="project">
        <h1>What's your idea?</h1>
      </div>
      <div
        className="project_wrap"
        style={{ backgroundImage: `URL(${image1})` }}
        onClick={() => {
          navi('/maker/open_project');
        }}
      >
        <h2 className="project_button_title"> WOW diz, ProJect Open </h2>
        <p className="project_button_content">
          Introduce your story and meet
          <br />
          investors and supporters
        </p>
        <Button
          variant="contained"
          className="project_button"
          style={{ width: "150px", backgroundColor: "#9ac7f8", fontWeight: "700" }}
        >
          Open
        </Button>
      </div>
      {/* 주목해야할만한 펀딩 , 신규 펀딩 */}
      <div className="main_line2">
        <div className="new_funding_form">
          <div className="preference_funding">
            <h2 className="preference_line">주목해야할 신규 펀딩</h2>
            <p className="preference_line_sub">
              {" "}
              트렌드에 맞춰 주목해야할 신규 펀딩{" "}
            </p>
          </div>
          <div className="new_funding">
            <Swiper
              style={{ width: "100%", height:"290px"}}
              spaceBetween={-13}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 3000 }} // 추가
            >
              {banner &&
                banner.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <Perference_funding data={data} idx={idx} key={idx} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="preference_funding">
            <h2 className="preference_line">놓치면 아쉬운 종료 임박 펀딩</h2>
            <p className="preference_line_sub"> 기간이 많이 남지 않은 종료 임박 펀딩</p>
          </div>
          <div className="new_funding">
            <Swiper
              style={{ width: "100%", height:"290px"}}
              spaceBetween={-13}
              slidesPerView={3}
              navigation
              autoplay={{ delay: 3000 }} // 추가
            >
              {banner &&
                banner.map((data, idx) => (
                  <SwiperSlide  key={idx}>
                    <Perference_funding data={data} idx={idx} key={idx} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <div className="support_line">
          <div className="preference_funding">
            <h2 className="preference_line_support">친절상담, 고객센터 </h2>
            <p className="preference_line_sub_support">친절한 상담을 약속합니다</p>
          </div>
          <div className="support_line_sub">
          {supportComponent &&
            supportComponent.map((supportComponent, idx) =>(
            <SupportViewQna key={idx}
            title ={supportComponent.title} subject={supportComponent.subject} 
            subjectText={supportComponent.subjectText} back_image={supportComponent.back_image}/> 
            ))}
          </div>
            <div className="support_line_sub_button">
              <Button variant="contained" color="secondary" className="home_main_layout_faq_button" style={{color: "white", fontWeight: "600", backgroundColor: "mediumslateblue"}}>자주 찾는 질문 FAQ 바로가기</Button>
            </div>
          <div className="preference_funding">
            <h2 className="preference_line_support">펀딩관련, YOUTUBE</h2>
            <p className="preference_line_sub_support">펀딩 교육 및 관련지식</p>
          </div>
          <div className="youtube_layout">
            {/* youtube 컴포넌트 */}
            <YoutubeLayout />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
