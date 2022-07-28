import React, { useEffect, useState } from 'react';
import AxiosService from '../../service/AxiosService';
import BasicTable from '../table/BasicTable';

const Point = ({dataLoad}) => {

    const [userLoad,setUserLoad] = useState()

    const [pointUseLoad,setPointUseLoad] = useState([
               
    ])

    const pointUserLoad = () => {
        
        const url = "/api/user/point/history?user_id=" + dataLoad.user_id;
      
        AxiosService.get(url).then((res)=>{
            setPointUseLoad(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    useEffect(() => {

      pointUserLoad();
 
      }, []);


    return (
        <div>
            <h2> 포인트 히스토리</h2>
            
        </div>
    );
};

export default Point;