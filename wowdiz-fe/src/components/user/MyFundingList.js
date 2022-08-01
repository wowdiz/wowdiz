import React from 'react';



const MyFundingList = ({data,idx}) => {
    return (
        <div style={{display:"block"}}>
       
                <div className='my_funding_list_itme'> 
                    <div className="perference_funding_detail" style={{display:"inline-block"}}>
                    <span>
                        <img
                        className="perference_funding_detail_image"
                        src={data.img}
                        alt=""
                        ></img>
                        <p className="perference_fundig_title">{data.title}</p>
                        <p className="fundig_category_component">{data.catagory} | {data.maker}</p>
                        <div className="middle_div">
                        <hr className="midle_bar"></hr>
                        <hr
                            className="midle_bar_gauge"
                            style={{
                            width: data.percent <= 100 ? "100%" : data.percent,
                            backgroundSize: data.percent <= 100 ? "100%" : data.percent,
                            }}
                        ></hr>
                        </div>
                        <p className="perference_funding_percent">{data.percent}</p>
                        <p className="perference_funding_price">{data.price}</p>
                    </span>
                    </div>
                </div>
                <div className="my_funding_data" style={{display:"inline-block"}}>
                    <h4> 내가 펀딩한 금액</h4>
                    <h5>5000 원</h5>
                    <h4> 펀딩 배송 날짜</h4>
                    <h5>2021-10-10</h5>

                </div>     
    </div>
    );
};

export default MyFundingList;