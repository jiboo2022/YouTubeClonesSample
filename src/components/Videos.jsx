import { Stack, Box } from '@mui/system';
import React from 'react'
import{VideoCard, ChannelCard } from './'

const Videos = ({vid}) => {

 // console.log(vid);
return  (
 
  <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}> 
 
  { vid.map( (item, idx)=>(
 
 <Box key={idx}>
 
   {item.video_id ? <VideoCard video={item} /> : <ChannelCard channelDetail={item} />}

 </Box>
 
  )  )};
 
 
      
     </Stack>
       
       
       
   )

}
 


export default Videos