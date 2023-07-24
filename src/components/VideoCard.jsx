import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";




const VideoCard = ({video:{ video_id,title,author,number_of_views,channel_id,channelTitle,thumbnails:{2:{url}}}  }) => {
   // console.log(video_id,title,author,number_of_views,url,channel_id);
  return (
    <Card sx={{ width:{ md:'236', xs:'100%'} , boxShadow:'none',borderRadius:'none'}}>
      <Link to={video_id ? `/Video/${video_id}`: demoVideoUrl}>
      <CardMedia

        image={url}
        alt={title}
        sx={{ height: 188, width: 248}}
      />
            </Link>

            <CardContent sx={{ backgroundColor:'#1e1e1e', height: '106px'}}>

            <Link to={video_id ? `/Video/${video_id}`: demoVideoUrl}>

             <Typography variant='subtitle1' fontWeight='bold' color='#fff'>

                  { title ? title.slice(0, 20) : demoVideoTitle.slice(0, 20) }

             </Typography>
            
            </Link>


            <Link to={channel_id ? `/channel/${channel_id}`: demoChannelUrl}>

             <Typography variant='subtitle2' fontWeight='bold' color='grey'>

                  { channelTitle? channelTitle.slice(0, 17) : "Channel " +title.slice( 0, 17) }

                  <CheckCircle sk={{ fontSize:'12px', color:'gray', ml:'5px' }}>


                  </CheckCircle>

             </Typography>
            
            </Link>




            </CardContent>

    </Card>
  )
}

export default VideoCard