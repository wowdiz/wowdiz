import React, { useRef, useState } from 'react';
import defaultImg from '../../assets/images/util/fileUploader.png';

const MakerOpenProjectForm5 = () => {
    const [isHovering, setIsHovering] = useState(0);

    const [mainImage, setMainImage] = useState(defaultImg);
    const fileInput = useRef(null);

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
    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>계좌 정보를 입력해 주세요</h3>
                <p style={{color:'gray'}}>프로젝트 종료 후 입금받으실 계좌를 입력해 주세요.</p>
            </div>
            <div>
                <h3>거래 은행을 선택해주세요</h3>
                <select>
                    <option>산업은행</option>
                    <option>기업은행</option>
                    <option>국민은행</option>
                </select>
            </div>
            <div>
                <h3>계좌번호를 적어주세요</h3>
                <input className='project_input' type='text' />&nbsp;&nbsp;
            </div>
            <div>
                <h3>예금주명을 적어주세요</h3>
                <input className='project_input' type='text' placeholder='계좌에 등록된 예금주명과 일치해야 합니다.'/>&nbsp;&nbsp;
            </div>
            <div>
                <h3>통장 사본 이미지를 올려주세요</h3>
                <input type='file' style={{display:'none'}} accept={defaultImg}
                    name='profile_img' onChange={handleFileUpload} ref={fileInput}/>
                <img className='project_file_input_img' src={mainImage} alt='' 
                    onClick={() => {fileInput.current.click()}}
                    onMouseOver={() => setIsHovering(1)}
                    onMouseOut={() => setIsHovering(0)}/>
                <div className='img_hover' style={{height:'1px'}}>
                    <span style={{color:'gray'}}>{isHovering===1?'클릭하여 이미지를 교체할 수 있습니다.':''}</span>
                </div>
            </div>
            <div>
                <h3>세금계산서 정보를 입력해 주세요</h3>
                <p style={{color:'gray'}}>크라우디 수수료에 한해서만 세금계산서를 발급해 드립니다. 
                이 단계에서 사업자등록증을 올리지 않으시면 세금계산서를 발급받으실 수 없습니다.</p>
            </div>
            <div>
                <h3>전자 세금 계산서 이메일을 적어주세요</h3>
                <input className='project_input' type='text' />&nbsp;&nbsp;
            </div>
        </div>
    );
};

export default MakerOpenProjectForm5;