import React from 'react';

const Perference_funding = ({data, idx}) => {
    return (
    <div className="perference_funding_detail"> 
        <img className="perference_funding_detail_image"src={data.img} alt=""></img>
        <p className="perference_fundig_title">{data.title}</p>
        <p className="perference_fundig_category">{data.catagory}</p>
        <p className="perference_fundig_maker">{data.maker}</p>
        <div className="middle_div">
          <hr className="midle_var"></hr>
          <hr className="midle_var_gauge" style={{width:data.percent<=100?'100%':data.percent, backgroundSize:data.percent<=100?'100%':data.percent}}></hr>
        </div>
        <p className="perference_funding_percent">{data.percent}</p>
        <p className="perference_funding_price">{data.price}</p>
      </div> 
    );
};

export default Perference_funding;