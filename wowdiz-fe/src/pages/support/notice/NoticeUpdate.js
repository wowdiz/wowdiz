import React, { useEffect, useRef, useState } from "react";
import "../../../style/notice_create.css";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "../../../service/AxiosService";

import CameraAltIcon from '@mui/icons-material/CameraAlt';

const NoticeUpdate = () => {

    const { notice_id } = useParams();
    const [age, setAge] = React.useState('');
    
    const [data, setData] = useState({
        notice_id: notice_id,
        notice_title:"", 
        notice_content:"", 
        notice_thumbnail:"", 
        important:""
    });
    const [open, setOpen] = React.useState(false);
  
    const handleChange = (event) => {
        setAge(event.target.value);
        let imp =null;
        if(event.target.value==='10') {
            imp="Y";
        }else {
            imp="N";
        }
        setData({
            ...data,
            important:imp
        })
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    const navi = useNavigate();

    const pagelistUrl =(data)=>{
        // const url="/supportboard/noticecreate";
       console.log(data);
    } 

    const noticesubmit = () => {
        console.log(data);
        AxiosService.post("/notice/update",data).then((res)=>{
            console.log("성공" +res);
            navi("../../supportboard/1");
     
        }).catch((err)=>{
            console.log(err);
        })

        // document.location.href = "http://localhost:4200/supportboard/notice";
      };
  
    const noticeDataLoad = () => {
        let detailtUrl = "/notice/noticedetail?notice_id="+notice_id;
        AxiosService.get(detailtUrl).then((res) => {
            setData(res.data);
            console.log("res.detail", res.data);
          });
    }
 
    useEffect(() => {
        noticeDataLoad();

    },[])


    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const fileInput = useRef(null);
  
    // 이미지 업로드
    const uploadImage = (e) => {
        let uploadUrl = "/notice/uploadFile";
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); 

        if(!uploadFile) {
            setData({
                ...data,
                notice_thumbnail: ''
            });
            return;
        }

        AxiosService({
            method:'post',
            url: uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(response => {
            setData({
                ...data,
                notice_thumbnail: response.data
            }); 
        }).catch(err => {
            alert(err);
        });
    }

return(
    <form>
        <div className="notice_create_form_layout">
            <div className="notice_create_form_layout_sub">
                <h3>공지사항 글수정</h3>
             
                <div className="notice_create_form_title">
                    <TextField className="title_input" name="notice_title" label={data.notice_title} variant="outlined" defaultValue={data.notice_title} onChange={onChange}  />
                </div>
                <div className="notice_create_form_content">
                    <textarea className="notice_create_form_content_area" name="notice_content" id="notice_create_form_content_area" 
                        onChange={onChange} required="" placeholder="Content" defaultValue={data.notice_content}>
                    </textarea>
                </div>
                <div className="notice_create_form_important">
                    <FormControl sx={{ m: 0, minWidth: 300 }}>
                        <InputLabel className="demo-controlled-open-select-label">{data.important}</InputLabel>
                        <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" name="imoportant"
                        open={open} onClose={handleClose} onOpen={handleOpen} label="Age" value={age} onChange={handleChange}
                        defaultValue={data.important==="Y"?"10":"20"}
                        >
                            <MenuItem value="" >
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="10">Y</MenuItem>
                            <MenuItem value="20">N</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="notice_create_form_thumbnail">
                    <span>
                        {
                            data.notice_thumbnail === undefined || data.notice_thumbnail === '' ? 
                            'Image File 첨부하기 (선택)' : 
                            data.notice_thumbnail
                        }
                    </span>
                        {/* <IconButton color="primary" aria-label="upload picture" component="label" onClick={uploadImage}>
                            <input hidden accept="image/*" type="file"/>
                                <PhotoCamera />
                        </IconButton> */}
                        <CameraAltIcon 
                            style={{
                                fontSize:'30px',
                                position:'relative',
                                top:'10px',
                                cursor:'pointer'
                            }} 
                            onClick={() => {fileInput.current.click()}}
                        />
                        <input type='file' style={{display:'none'}}
                            name='notice_thumbnail' onChange={uploadImage} ref={fileInput}
                        />
                </div>

                <div className="notice_create_form_imgPreview">
                    <img alt='' src={data.notice_thumbnail === null ? "": "http://localhost:9150/save/" + data.notice_thumbnail}/>
                </div>

                <div className="notice_create_form_writedate">

                </div>
                {/* <div className="notice_create_form_writeadmin">
                    <TextField className="admin_input" label="Admin ID Input" variant="outlined" />
                </div> */}
                

                <button type='button' className="notice_back_button"
                onClick={() => {
                    navi(-1);
                }}
                >이전</button>

                <button type='button' className="notice_create_button"
                onClick={noticesubmit}>등록</button>
            </div>
        </div>
    </form>
 
    );
};

export default NoticeUpdate;