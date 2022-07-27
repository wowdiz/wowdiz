import React, { useState } from 'react';
// import './Write.css';
import Edeitor from './Editor';
// import Category from '../../components/Select/Select'
// import NavBell from '../../components/NavBell/NavBell'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import parse from 'html-react-parser';


export default function Write() {
  const [title, SetTitle] = useState('제목')
  const [Content, SetContent] = useState('')
  const [editor, setEditor] = useState(null);

  const changeTitle = (e) => {
    SetTitle(e.target.value)
    console.log(e.target.value)
  }

  const changeContent = (e) => {
    SetContent(e.target.value)
    console.log(e.target.value)
  }


  return (
    <>
      {/* <div>{title}</div> */}
      <div>{parse(Content)}</div>
      {/* <NavBell /> */}
      <div className="container">
        <TextField id="outlined-basic" value={title} label="제목을 입력하세요" variant="outlined" onChange={changeTitle} />
        {/* <Category /> */}
        <Edeitor
          SetContent={SetContent}
          // handleChange={(data) => {
          //   setEditor(data);
          // }}
          data={Content}
        />
        <p>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined">미리보기</Button>
            <Button variant="outlined">임시저장</Button>
            <Button variant="outlined">완료</Button>

          </Stack>
        </p>
      </div>

    </>
  )
}