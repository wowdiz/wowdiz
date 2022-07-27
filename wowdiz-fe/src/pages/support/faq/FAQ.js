import React, { useCallback, useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AxiosService from "../../../service/AxiosService";
import { useNavigate, useParams } from "react-router-dom";
import FAQUpdate from "../../../pages/support/faq/FAQUpdate";

const FAQ = () => {
  const { faq_id } = useParams();
  const [faqdata, setFaqdata] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState([]);

  const navi = useNavigate();

  const [startNum, setStartNum] = useState(0);

  let faqlistUrl = "/supportboard/faqpage";

  console.log(faqlistUrl);

  const faqList = useCallback(() => {
    AxiosService.get(faqlistUrl).then((res) => {
      setFaqdata(res.data);
      setToggleUpdate(new Array(res.data.length).fill(true));
    });
  }, [faqlistUrl]);

  useEffect(() => {
    faqList();
  }, []);

  const addFaqList = () => {
    setStartNum(startNum + 5);
    let addfaqUrl = "/supportboard/addfaqpage?startNum=" + startNum;
    AxiosService.get(addfaqUrl).then((res) => {
      let newFaqData = faqdata;
      newFaqData = newFaqData.concat(res.data);
      setToggleUpdate(toggleUpdate.concat(new Array(5).fill(true)));
      setFaqdata(newFaqData);
      // setFaqdata(faqdata + res.data);
    });
  };

  useEffect(() => {
    addFaqList();
  }, []);

  console.log("startNum", startNum);
  const faqDelete = (e) => {
    console.log(e.target.value);
    let faqdeleteUrl = "/supportboard/faqdelete?faq_id=" + e.target.value;
    AxiosService.get(faqdeleteUrl, faq_id).then((res) => {
      console.log(res);

      alert("삭제되었습니다.");
      window.location.href = "/supportboard/faq";
    });
  };

  const toggle = (idx) => {
    console.log(toggleUpdate);
    setToggleUpdate(
      toggleUpdate
        .slice(0, idx)
        .concat(false)
        .concat(toggleUpdate.slice(idx + 1, toggleUpdate.length))
    );
  };

  return (
    <div style={{ textAlign: "center", verticalAlign: "middle" }}>
      <div className="faq_header">
        WOWDIZ 회원님들께서 가장 자주하시는 질문을 모았습니다.
      </div>
      {faqdata &&
        faqdata.map((row, idx) => (
          <div
            key={idx}
            style={{
              borderTop: "1px inset #f0eeeea6",
              width: "800px",
              margin: "0 auto",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <input
              type="hidden"
              value={row.faq_id}
              id="faqId"
              className="faq_id"
            />
            {toggleUpdate[idx] ? (
              <>
                <Accordion sx={{ boxShadow: 0 }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ margin: "0px" }}
                  >
                    <div style={{ margin: "0px" }}>
                      <Typography
                        sx={{ height: "60px" }}
                        style={{ margin: "0", lineHeight: "4.3" }}
                      >
                        <b>{row.faq_title}</b>
                      </Typography>
                    </div>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{ minHeight: 10 }}
                    style={{
                      backgroundColor: "#fafafb",
                      textAlign: "left",
                      padding: "16px 16px 16px;",
                    }}
                  >
                    <Typography>
                      {row.faq_content}
                      <br />

                      <button
                        type="button"
                        className="faq_update_btn"
                        style={{ float: "right" }}
                        value={row.faq_id}
                        onClick={(e) => {
                          faqDelete(e);
                        }}
                      >
                        삭제
                      </button>
                      <button
                        type="button"
                        className="faq_update_delete"
                        style={{ float: "right" }}
                        onClick={() => toggle(idx)}
                      >
                        수정
                      </button>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                {idx + 1 === faqdata.length ? <hr /> : ""}
              </>
            ) : (
              <FAQUpdate
                title={row.faq_title}
                content={row.faq_content}
                faqid={row.faq_id}
              />
            )}
          </div>
        ))}
      <button type="button" className="button_more" onClick={addFaqList}>
        더보기
      </button>
      <br />
      <button
        type="button"
        className="button_delete"
        onClick={() => navi("/supportboard/faqwrite")}
      >
        글쓰기
      </button>
    </div>
  );
};

export default FAQ;
