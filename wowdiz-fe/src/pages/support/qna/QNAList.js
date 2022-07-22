import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AxiosService from "../../../service/AxiosService";
import { Link, useNavigate, useParams } from "react-router-dom";

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
  const [pageData, setPageData] = useState([]);

  const { currentPage } = useParams();

  // let pagelistUrl = "/supportboard/qnalist?currentPage=" + currentPage;
  let pagelistUrl = "/supportboard/qnapage?currentPage=" + currentPage;

  const pageList = useCallback(() => {
    // console.log(pagelistUrl);

    AxiosService.post(pagelistUrl).then((res) => {
      setData(res.data);

      console.log("res.data", res.data);
      console.log(res.data);
    });
  }, [pagelistUrl]);

  useEffect(() => {
    pageList();
  }, [pageList, currentPage]);

  console.log("curr", currentPage);

  return (
    <div>
      <TableContainer component={Paper} sx={{ height: 500 }}>
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
                    {row.inquiry_id}
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
                    {row.inquiry_status}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="faq_pagination_container">
        <ul>
          {data.startPage > 1 ? (
            <li className="faq_pagination_wrap" id="sss">
              <Link to={`/supportboard/qnapage/${data.startPage - 1}`}>
                이전
              </Link>
            </li>
          ) : (
            ""
          )}
          {data.parr &&
            data.parr.map((n, idx) => {
              const url = "/supportboard/qnapage/" + n;
              return (
                <li key={idx} className="faq_pagination_wrap">
                  <Link to={url}>
                    <span
                      className="sadas"
                      // style={{ color: n === currentPage ? "red" : "black" }}
                    >
                      {n}
                    </span>
                  </Link>
                </li>
              );
            })}
          {data.endPage < data.totalPage ? (
            <li className="faq_pagination_wrap">
              <Link to={`/supportboard/qnapage/${data.endPage + 1}`}>다음</Link>
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
