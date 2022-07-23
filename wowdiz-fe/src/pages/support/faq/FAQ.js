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
  const [addlist, setAddlist] = useState([]);
  const { currentPage } = useParams();

  const navi = useNavigate();

  let faqlistUrl = "/supportboard/faqpage";

  console.log(faqlistUrl);

  const faqList = useCallback(() => {
    AxiosService.post(faqlistUrl, faq_id).then((res) => {
      console.log(res);
      setFaqdata(res.data);
      setToggleUpdate(new Array(res.data.length).fill(true));
      setAddlist([...addlist, res.data]);
      console.log("res.faqdata", res.data);
    });
  }, [faqlistUrl]);

  const faqDelete = (e) => {
    console.log(e.target.value);
    let faqdeleteUrl = "/supportboard/faqdelete?faq_id=" + e.target.value;
    AxiosService.get(faqdeleteUrl, faq_id).then((res) => {
      console.log(res);

      alert("삭제되었습니다.");
      window.location.href = "/supportboard/faqpage";
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

  useEffect(() => {
    faqList();
  }, [faqList]);

  return (
    <div style={{ textAlign: "center", verticalAlign: "middle" }}>
      {faqdata &&
        faqdata.map((row, idx) => (
          <div
            key={idx}
            style={{
              borderTop: "2px inset #eaeaea",
              borderBottom: "2px inset #eaeaea",
              width: "600px",
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
              <Accordion>
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
                      style={{ float: "right" }}
                      onClick={() => toggle(idx)}
                    >
                      수정
                    </button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ) : (
              <FAQUpdate
                title={row.faq_title}
                content={row.faq_content}
                faqid={row.faq_id}
              />
            )}
          </div>
        ))}

      <button
        type="button"
        className="button_delete"
        onClick={() => navi("/supportboard/faqwrite")}
      >
        글쓰기
      </button>
      <button
        type="button"
        onClick={() => {
          AxiosService.get(faqlistUrl).then((res) => {
            setAddlist([...addlist, ...res.data]);
          });
        }}
      >
        더보기
      </button>
    </div>
  );
};

export default FAQ;
