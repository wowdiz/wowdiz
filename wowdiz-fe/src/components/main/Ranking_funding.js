import React from 'react';

const Rangking_funding = ({data,idx}) => {
    return (
        <div className="rangking_funding_detail" > 
            <img className="rangking_funding_detail_image"src={data.img} alt=""></img>
            <img className="rangking_chart" src={data.ranking} alt=""></img>
            <p className="rangking_fundig_title">{data.title}</p>
            <p className="rangking_fundig_category">{data.catagory}</p>
            <hr className="midle_rangking_var"></hr>
            <hr className="midle_rangking_var_gauge" style={{width:data.percent<=100?'100%':data.percent, backgroundColor:data.percernt<=100?'red':'#00c4c4'}}></hr>
            <p className="rangking_funding_percent">{data.percent}</p>
      </div> 
    );
};

export default Rangking_funding;