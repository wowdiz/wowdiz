import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from "react-router-dom"

const AdminFundingTableRows = ({ item, idx }) => {
    const navi = useNavigate();
    return (
        <TableRow 
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row" width="30px">{idx + 1}</TableCell>
            <TableCell align="left" width="150px">{item.project_name}</TableCell>
            <TableCell className='admin_awaiting_row_project_summary' 
                align="left" width="250px" 
                onClick={() => {
                    navi('/admin/funding/detail/'+item.project_id);
                }}
            >{item.project_summary}</TableCell>
            <TableCell align="left" width="80px">{item.target_amount}</TableCell>
            <TableCell align="left" width="120px">{item.close_date.substring(0, 10)}</TableCell>
        </TableRow>
    );
};

export default AdminFundingTableRows;