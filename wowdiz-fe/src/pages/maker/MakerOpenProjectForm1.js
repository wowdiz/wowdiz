import React, { useRef, useState } from 'react';
import defaultImg from '../../assets/images/util/fileUploader.png';
import ClearIcon from '@mui/icons-material/Clear';
import AxiosService from '../../service/AxiosService';


const MakerOpenProjectForm1 = ( props ) => {
    const [lengthChecker, setLengthChecker] = useState(0);
    const [duration, setDuration] = useState(0);

    //onChange 현재날짜로부터 선택한 종료일사이의 일수 구하기
    const diffDate = (e) => {
        let value = e.target.value;
        const toDate = new Date(value);
        const dMillis = toDate.getTime() - Math.floor(new Date().getTime()/86400000)*86400000;
        const dDay = dMillis/86400000; //1000*60*60*24=하루
        if(dDay > 60 || dDay < 7) {
            alert('최소 7일부터 최대 60일까지로 기간을 다시 설정해 주세요.');
        }
        setDuration(Number(dDay));
    };

    const fileInput = useRef(null);

    // 이미지 업로드
    const uploadImage = (e) => {
        let uploadUrl = "/maker/uploadFiles";
        const uploadFile = e.target.files[0];
        const imageFile = new FormData();
        imageFile.append("uploadFile", uploadFile); 

        if(!uploadFile) {
            return;
        }

        AxiosService({
            method:'post',
            url: uploadUrl,
            data:imageFile,
            headers:{'Content-Type':'multipart/form-data'}
        }).then(response => {
            props.setForm({
                ...props.form,
                project_thumbnail: response.data
            }); 
        }).catch(err => {
            alert(err);
        });
    }
    console.log('props.form.project_thumbnail',props.form.project_thumbnail);
    console.log('props.form.project_name',props.form.project_name);

    // //대표이미지업로드
    // const handleFileUpload = (e) => {
    //     if(e.target.files[0]){
    //         props.setMainImage(e.target.files[0])
    //     } else { //업로드 취소할 시
    //         props.setMainImage(defaultImg);
    //         return;
    //     }
	//     //화면에 프로필 사진 표시
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if(reader.readyState === 2){
    //             props.setMainImage(reader.result);
    //         }
    //     }
    //     reader.readAsDataURL(e.target.files[0]);
    // }

    //img 호버로 도움말 표시
    const [isHovering, setIsHovering] = useState(0);

    //keyword
    const [keyword, setKeyword] = useState('');

    //keyword 입력이벤트
    const addKeyword = () => {
        if(keyword === '') {return;}
        props.setKeywordArr(props.keywordArr.concat(keyword));
        setKeyword('');
    }

    const addKeywordToProject = () => {
        props.setForm({
            ...props.form,
            project_keyword : props.keywordArr
        });
    }

    //enter key 이벤트
    const onKeyUp = (e) => {
        if(e.key === 'Enter') {
            addKeyword();
            e.target.value = '';
        }
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }
    
    const delKeyword = (idx) => {
        props.setKeywordArr(props.keywordArr.filter((data,index) => idx !== index));
    }

    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트의 성공 조건 & 수수료 안내</h3>
                <p>프로젝트 종료일 기준 모금액이 목표금액의 100%이상인 경우에만 프로젝트가 성공하게 됩니다.</p>
                <p>프로젝트가 성공한 경우, wowdiz는 모금액에서 수수료를 제한 금액을 정산해 드립니다.</p>
                <p style={{color:'gray'}}>*수수료(vat별도) wowdiz 수수료 10% + 결제수수료 3%</p>
            </div>
            <div>
                <h3>프로젝트의 제목을 적어주세요</h3>
                <p style={{color:'gray'}}>프로젝트의 핵심 내용을 담을 수 있고 간결한 제목을 정해주세요.</p>
                <input className='project_input' type='text' maxLength={40} 
                defaultValue={props.form.project_name}
                onChange={(e) => {
                    setLengthChecker(e.target.value.length);
                }}
                name='project_name'
                onBlur={(e) => {
                    props.handleProject(e);
                }}
                />&nbsp;&nbsp;
                <span style={{color:'gray'}}>{lengthChecker}/40</span>
            </div>
            <div>
                <h3>목표 금액을 적어주세요</h3>
                <p style={{color:'gray'}}><span className='target_money'>최소 100,000원 이상</span>이어야 합니다.</p>
                <input className='project_input' type="number" min={100000} 
                name='target_amount'
                defaultValue={props.form.target_amount}
                onBlur={(e) => {
                    props.handleProject(e);
                }}
                />&nbsp;&nbsp;
                <span style={{color:'gray'}}>원</span>
            </div>
            <div>
                <h3>프로젝트의 진행 기간을 적어주세요</h3>
                <p style={{color:'gray'}}>최소 7일부터 최대 60일까지 가능합니다.</p>
                <span style={{fontSize:'1.2em'}}>"{duration}"</span><span style={{color:'gray'}}>일 남음</span>
                <input className='project_input_small' type='date' onChange={diffDate}
                name='close_date'
                defaultValue={props.form.close_date}
                onBlur={(e) => {
                    props.handleProject(e);
                }}
                />
            </div>
            <div>
                <h3>프로젝트 대표 이미지를 등록해주세요</h3>
                <input type='file' style={{display:'none'}} 
                    //accept={defaultImg}
                    name='project_thumbnail' 
                    // onChange={handleFileUpload} //기존
                    onChange={uploadImage} //변경
                    ref={fileInput}/>
                <img className='project_file_input_img' 
                    src={props.form.project_thumbnail===""?defaultImg:"http://localhost:9150/save/"+props.form.project_thumbnail} 
                    alt='' 
                    onClick={() => {fileInput.current.click()}}
                    onMouseOver={() => setIsHovering(1)}
                    onMouseOut={() => setIsHovering(0)}
                    name='project_thumbnail'
                    // onBlur={(e) => {
                    // props.handleProject(e);
                    // }}
                />
                <div className='img_hover' style={{height:'1px'}}>
                    <span style={{color:'gray'}}>{isHovering===1?'클릭하여 이미지를 교체할 수 있습니다.':''}</span>
                </div>
            </div>
            <div>
                <h3>프로젝트 키워드를 적어주세요. <span className='target_money'>(선택사항)</span></h3>
                <input className='project_input' type='text' onChange={handleKeyword} 
                //onKeyUp={onKeyUp} 
                onKeyUp={onKeyUp}
                onBlur={addKeywordToProject}
                placeholder='키워드 입력 후 엔터를 눌러주세요.'/>
                <div className='hashtag_arr'>
                {
                    props.keywordArr && props.keywordArr.map((data, idx) => (
                        <span className='keyword' key={idx}>
                            {data}&nbsp;
                            <ClearIcon className='delIcon' onClick={() => delKeyword(idx)} 
                            style={isHovering===idx+1 ? {fontSize:'12px',backgroundColor:'#55a7ff'}:{fontSize:'12px'}}
                            onMouseOver={() => setIsHovering(idx+1)}
                            onMouseOut={() => setIsHovering(0)}
                            />
                        </span>
                    ))
                }
                </div>
                
            </div>
        </div>
    );
};

export default MakerOpenProjectForm1;