import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AxiosService from "../../../service/AxiosService";
import { Link, useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../../../style/qna.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#80DACE",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const QNAList = () => {
  const navi = useNavigate();
  const [data, setData] = useState([]);

  const { currentPage } = useParams();

  let pagelistUrl = "/supportboard/qnapage?currentPage=" + currentPage;

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

  return (
    <div>
      <TableContainer component={Paper} sx={{ height: 550 }}>
        <Table
          sx={{ width: 900 }}
          style={{ margin: "30px auto" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">번호</StyledTableCell>
              <StyledTableCell align="center">제목</StyledTableCell>
              <StyledTableCell align="center">등록일</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.list &&
              data.list.map((row, idx) => (
                <StyledTableRow key={idx}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {data.no - idx}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    onClick={() =>
                      navi("/supportboard/qnadetail/" + row.inquiry_id)
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {row.inquiry_title}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.write_date}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <b>
                      {row.inquiry_status === 0 ? (
                        <p>답변대기</p>
                      ) : (
                        <p>답변완료</p>
                      )}
                    </b>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="qna_pagination_container">
        <ul className="qna_pagination_warp">
          {data.startPage > 1 ? (
            <li className="qna_pagination_box">
              <Link
                to={`/supportboard/qnapage/${data.startPage - 1}`}
                className="qna_pagination_num"
                style={{ textDecoration: "none" }}
              >
                <ArrowBackIosIcon />
              </Link>
            </li>
          ) : (
            ""
          )}
          {data.parr &&
            data.parr.map((n, idx) => {
              const url = "/supportboard/qnapage/" + n;
              return (
                <li key={idx} className="qna_pagination_box">
                  <Link
                    to={url}
                    className="qna_pagination_num"
                    style={{ textDecoration: "none" }}
                  >
                    {n}
                  </Link>
                </li>
              );
            })}
          {data.endPage < data.totalPage ? (
            <li className="qna_pagination_box">
              <Link
                to={`/supportboard/qnapage/${data.endPage + 1}`}
                className="qna_pagination_num"
                style={{ textDecoration: "none" }}
              >
                <ArrowForwardIosIcon />
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default QNAList;
