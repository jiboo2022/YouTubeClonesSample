import React from 'react';
import { useState, useEffect  } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromApi';
import  { ChannelCard, VideoCard } from './';

const ChannelDetails = () => {

  const { id  } = useParams();

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos ,setVideos] = useState([])




  const url_info = `channel/videos?channel_id={id}`;

  const url_info2 = `channel/details?channel_id={id}`;


  useEffect( ()=> { 

    fetchFromAPI(url_info2).then( (data)=>setChannelDetail(data))
    

    fetchFromAPI(url_info).then( (data)=>setVideos(data?.videos))

},[id]);


console.log(channelDetail,videos)

  return (
    <Box minHeight="95vh">
      
      <Box>

        <div style={{
          background:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 19%,
          
          rgba(1,179,235,1) 62%, rgba(227,0,255,1) 99%)`,
          zIndex:10,height:'300px' 

        }}
        
        />


       <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box display='flex' p='2'>

      <Box sx={{ mr:{sm:'100px'}}}>

         <VideoCard  video={videos} />
      </Box>

      </Box>
    
    
    </Box>
  )
}

export default ChannelDetails