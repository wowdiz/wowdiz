import React, { useRef, useState } from 'react';
import defaultImg from '../../assets/images/util/fileUploader.png';
import ClearIcon from '@mui/icons-material/Clear';


const MakerOpenProjectForm1 = () => {
    const [lengthChecker, setLengthChecker] = useState(0);
    const [duration, setDuration] = useState(0);
    const today = new Date().toISOString().substring(0, 10);

    //onChange 현재날짜로부터 선택한 종료일사이의 일수 구하기
    const diffDate = (e) => {
        let value = e.target.value;
        const toDate = new Date(value);
        const dMillis = toDate.getTime() - Math.floor(new Date().getTime()/86400000)*86400000;
        const dDay = dMillis/86400000; //1000*60*60*24=하루
        // if(dMillis%86400000 > 0){
        //     return setDuration(dDay+1);
        // }
        if(dDay > 60 || dDay < 7) {
            alert('최소 7일부터 최대 60일까지로 기간을 다시 설정해 주세요.');
        }
        setDuration(Number(dDay));
    };

    const [mainImage, setMainImage] = useState(defaultImg);
    const fileInput = useRef(null);

    //대표이미지 파일미리보기
    const handleFileUpload = (e) => {
        if(e.target.files[0]){
            setMainImage(e.target.files[0])
        } else { //업로드 취소할 시
            setMainImage(defaultImg);
            return;
        }
	    //화면에 프로필 사진 표시
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setMainImage(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    //img 호버로 도움말 표시
    const [isHovering, setIsHovering] = useState(0);

    //keyword
    const [keywordArr, setKeywordArr] = useState([]);
    const [keyword, setKeyword] = useState('');

    //keyword 입력이벤트
    const addKeyword = () => {
        if(keyword === '') {return;}
        setKeywordArr(keywordArr.concat(keyword));
        console.log(keyword);
        console.log(keywordArr);
        setKeyword('');
    }

    //enter key 이벤트
    const enterEvent = (e) => {
        if(e.key === 'Enter') {
            addKeyword();
            e.target.value = '';
        }
    }

    const handleKeyword = (e) => {
        setKeyword(e.target.value);
    }
    
    const delKeyword = (idx) => {
        setKeywordArr(keywordArr.filter((data,index) => idx !== index));
    }

    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트의 성공 조건 & 수수료 안내</h3>
                <p>프로젝트 종료일 기준 모금액이 목표금액의 100%이상인 경우에만 프로젝트가 성공하게 됩니다.</p>
                <p>프로젝트가 성공한 경우, wowdiz는 모금액에서 수수료를 제한 금액을 정산해 드립니다.</p>
                <p style={{color:'gray'}}>*수수료(vat별도)크라우디 수수료 10% + 결제수수료 3%</p>
            </div>
            <div>
                <h3>프로젝트의 제목을 적어주세요</h3>
                <p style={{color:'gray'}}>프로젝트의 핵심 내용을 담을 수 있고 간결한 제목을 정해주세요.</p>
                <input className='project_input' type='text' maxLength={40} onChange={(e) => {
                    setLengthChecker(e.target.value.length);
                }}/>&nbsp;&nbsp;
                <span style={{color:'gray'}}>{lengthChecker}/40</span>
            </div>
            <div>
                <h3>목표 금액을 적어주세요</h3>
                <p style={{color:'gray'}}><span className='target_money'>최소 100,000원 이상</span>이어야 합니다.</p>
                <input className='project_input' type="number" min={100000} />&nbsp;&nbsp;
                <span style={{color:'gray'}}>원</span>
            </div>
            <div>
                <h3>프로젝트의 진행 기간을 적어주세요</h3>
                <p style={{color:'gray'}}>최소 7일부터 최대 60일까지 가능합니다.</p>
                <span style={{fontSize:'1.2em'}}>"{duration}"</span><span style={{color:'gray'}}>일 남음</span>
                <input className='project_input_small' type='date' defaultValue={today} onChange={diffDate}/>
            </div>
            <div>
                <h3>프로젝트 대표 이미지를 등록해주세요</h3>
                <input type='file' style={{display:'none'}} accept={defaultImg}
                    name='profile_img' onChange={handleFileUpload} ref={fileInput}/>
                <img className='project_file_input_img' src={mainImage} alt='' 
                    onClick={() => {fileInput.current.click()}}
                    onMouseOver={() => setIsHovering(1)}
                    onMouseOut={() => setIsHovering(0)}
                />
                <div className='img_hover' style={{height:'1px'}}>
                    <span style={{color:'gray'}}>{isHovering===1?'클릭하여 이미지를 교체할 수 있습니다.':''}</span>
                </div>
            </div>
            <div>
                <h3>프로젝트 키워드를 적어주세요. <span className='target_money'>(선택사항)</span></h3>
                <input className='project_input' type='text' onChange={handleKeyword} 
                onKeyUp={enterEvent} placeholder='키워드 입력 후 엔터를 눌러주세요.'/>
                <div className='hashtag_arr'>
                {
                    keywordArr && keywordArr.map((data, idx) => (
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