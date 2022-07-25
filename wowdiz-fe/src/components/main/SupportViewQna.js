import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard({back_image, title, subject, subjectText}) {
  return (
    <div className='home_support_qna_image'>
        <Card sx={{ }}>
        <CardActionArea>
            <CardMedia
            component="img"
            image={back_image}
            alt=""
            />
            <CardContent >
            <Typography gutterBottom variant="h5" component="div" style={{fontSize: "17px", fontWeight: "600"}}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {subject} <br/> {subjectText}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}
