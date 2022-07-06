import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({title, data}) {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell width="150px">{title.title_0}</TableCell>
                <TableCell align="right">{title.title_1}</TableCell>
                <TableCell align="right">{title.title_2}</TableCell>
                <TableCell align="right">{title.title_3}</TableCell>
                <TableCell align="right">{title.title_4}</TableCell>
                {title.title_5?<TableCell align="right">{title.title_5}</TableCell>:''}
                {title.title_6?<TableCell align="right">{title.title_6}</TableCell>:''}
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, idx) => (
                <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.data_0}
                </TableCell>
                <TableCell align="right">{row.data_1}</TableCell>
                <TableCell align="right">{row.data_2}</TableCell>
                <TableCell align="right">{row.data_3}</TableCell>
                <TableCell align="right">{row.data_4}</TableCell>
                {row.data_5?<TableCell align="right">{row.data_5}</TableCell>:''}
                {row.data_6?<TableCell align="right">{row.data_6}</TableCell>:''}
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
