import React, { useCallback, useEffect, useState } from "react";
import SupportNotice from "../../../components/support/SupportNotice";
import AxiosService from "../../../service/AxiosService";
import { Link, useNavigate, useParams } from "react-router-dom";

const Notice = () => {


  // useEffect(() => {
  //   AxiosService.get("/notice/list").then(res=>{
  //   console.dir(res.data)
  //   setData(res.data)
  // })
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //   };
  // }, []);

  
    const navi = useNavigate();
    const [data, setData] = useState([null]);
    const [pageData, setPageData] = useState([]);
  
    const { currentPage } = useParams();

    let pagelistUrl = "/notice/page?currentPage="+currentPage;


    const pageList = useCallback(() => {
      // console.log(pagelistUrl);
  
      AxiosService.post(pagelistUrl).then((res) => {
        setData(res.data);
  
        console.log("res.data", res.data);
      });
    }, [pagelistUrl]);
  
    useEffect(() => {
      pageList();
    }, [pageList, currentPage]);

  
  console.log("curr", currentPage);
  console.log("화장실"+data.list);

  
  return (
    <div>
      <div>
      {data.list  &&
        data.list.map((data, idx) => (
            <SupportNotice  key={idx} data={data}  />
      ))}
              <div className="notice_create_layout">
          <button className="notice_create" onClick={()=>
              navi("/supportboard/noticecreate/")
            }>등록</button>
        </div>
      </div>
      <div className="faq_pagination_container">
        <ul>
          {data.startPage > 1 ? (
            <li className="faq_pagination_wrap" id="sss">
              <Link to={`/supportboard/${data.startPage - 1}`}>
                이전
              </Link>
            </li>
          ) : (
            ""
          )}
          {data.parr &&
            data.parr.map((n, idx) => {
              const url = "/supportboard/" + n;
              return (
                <li key={idx} className="faq_pagination_wrap">
                  <Link to={url}>
      
                      <b>{n}</b>
                    
                  </Link>
                </li>
              );
            })}
          {data.endPage < data.totalPage ? (
            <li className="faq_pagination_wrap">
              <Link to={`/supportboard/${data.endPage + 1}`}>다음</Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      
    </div>
  );
};


export default Notice;
