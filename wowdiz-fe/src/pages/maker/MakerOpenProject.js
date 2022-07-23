import React, { useState } from "react";
import "../../style/maker.css";
import Form1 from "./MakerOpenProjectForm1";
import Form2 from "./MakerOpenProjectForm2";
import Form3 from "./MakerOpenProjectForm3";
import Form4 from "./MakerOpenProjectForm4";
import defaultImg from "../../assets/images/util/fileUploader.png";

const MakerOpenProject = () => {
  const [render, setRender] = useState(0);

  const [processSelector, setProcessSelector] = useState(1);
  const [styler, setStyler] = useState(1);
  const [title, setTitle] = useState("기본정보");
  const [mainImage, setMainImage] = useState(defaultImg);
  const [keywordArr, setKeywordArr] = useState([]);
  const [form, setForm] = useState({
  //form1
  project_name: "",
  target_amount: "",
  project_thumbnail: mainImage,
  project_keyword: keywordArr,
  close_date: "",

  //form2
  project_story: "",

  //form3
  reward: [],
  // [{
  //     reward_price : '',
  //     reward_title : '',
  //     reward_info : '',
  //     purchase_limit : '',
  //     require_parcel : '',
  // }]
 });
 const [project_keywordArr, setProject_keywordArr] = useState([]);

 const handleProject = (e) => {
  setForm({
   ...form,
   [e.target.name]: e.target.value,
  });
  console.log("form", form);
 };

 const onSubmit = () => {
  setRender(render + 1);
 };
 console.log("form", form);
 return (
  <div className="maker_open_project">
   <div className="maker_open_project_header">
    <h2>
     {title}
     <div className="reward_submit_btn" onClick={onSubmit}>
      승인 요청하기
     </div>
    </h2>
   </div>
   <div style={{ display: "flex" }}>
    <div className="maker_open_project_menu">
     <h3>프로젝트 만들기</h3>
     <div className="maker_open_project_rowmenu">
      <h4
       className={styler === 1 ? "rowmenu_clicked" : ""}
       onClick={() => {
        setStyler(1);
        setProcessSelector(1);
        setTitle("기본정보");
       }}
      >
       1.기본정보
      </h4>
      <h4
       className={styler === 2 ? "rowmenu_clicked" : ""}
       onClick={() => {
        setStyler(2);
        setProcessSelector(2);
        setTitle("스토리");
       }}
      >
       2.스토리
      </h4>
      <h4
       className={styler === 3 ? "rowmenu_clicked" : ""}
       onClick={() => {
        setStyler(3);
        setProcessSelector(3);
        setTitle("리워드");
       }}
      >
       3.리워드
      </h4>
      <h4
       className={styler === 4 ? "rowmenu_clicked" : ""}
       onClick={() => {
        setStyler(4);
        setProcessSelector(4);
        setTitle("안내사항");
       }}
      >
       4.안내사항
      </h4>
      {/* <h4 className={styler===5?'rowmenu_clicked':''} onClick={() => {
                        setStyler(5);
                        setProcessSelector(5);
                        setTitle('제작자/부가정보')}}>5.제작자/부가정보</h4> */}
     </div>
    </div>
    {processSelector === 1 ? (
     <Form1
      form={form}
      setForm={setForm}
      handleProject={handleProject}
      project_keywordArr={project_keywordArr}
      mainImage={mainImage}
      setMainImage={setMainImage}
      keywordArr={keywordArr}
      setKeywordArr={setKeywordArr}
     />
    ) : processSelector === 2 ? (
     <Form2 form={form} setForm={setForm} handleProject={handleProject} />
    ) : processSelector === 3 ? (
     <Form3
      form={form}
      setForm={setForm}
      handleProject={handleProject}
      // rewardOptionArr={rewardOptionArr}
      // setRewardOptionArr={setRewardOptionArr}
     />
    ) : (
     <Form4 />
    )}
   </div>
  </div>
 );
};

export default MakerOpenProject;
