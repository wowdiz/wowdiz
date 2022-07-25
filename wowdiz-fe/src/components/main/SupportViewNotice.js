import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import back_image from "../../assets/images/main/notice_image.jpg";

export default function ActionAreaCard() {
  return (
    <div className='home_support_notice_image'>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="150"
            image={back_image}
    
            alt=""
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{fontSize: "17px", fontWeight: "600"}}>
                공지사항
            </Typography>
            <Typography variant="body2" color="text.secondary">
                공지사항 게시판 정보 바로가기
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}
