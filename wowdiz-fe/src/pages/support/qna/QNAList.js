import React, { useCallback, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

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

  const SPRING_URL = "http://localhost:9150/";
  let pagelistUrl = SPRING_URL + "supportboard/qnalist";

  const pageList = useCallback(() => {
    // console.log(pagelistUrl);

    axios.get(pagelistUrl).then((res) => {
      setData(res.data);
      console.log("res.data", res.data);
    });
  }, [pagelistUrl]);

  useEffect(() => {
    pageList();
  }, [pageList]);

  return (
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
          {data &&
            data.map((row) => (
              <StyledTableRow key={row.inquiry_id}>
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
  );
};

export default QNAList;
