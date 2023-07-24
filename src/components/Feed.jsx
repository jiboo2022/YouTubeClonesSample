import React from 'react'
import { useState , useEffect } from 'react';
import { Stack, Box, Typography  } from '@mui/material';
import {Sidebar, Videos} from  './';
import { fetchFromAPI } from '../utils/fetchFromApi'



const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video,setVideo] = useState([]);
   const [fetchingVideos, setFetchingVideos] = useState(false)
   

  const url_info = `=${selectedCategory}`;

  
  
  
  useEffect( () =>{

     fetchFromAPI(url_info).then( (data)=>setVideo(data.videos));
 
  },[selectedCategory]);

   

  //console.log(video);

  //useEffect(()=>{ searchMovies('mario') },[] ) 

  return (

    
    <Stack  sx={{  flexDirection:{sx: "column", md:"row" } }} >

      <Box sx={{ height:{sx:"auto", md: '95vh' },borderRight:" 1px solid #3d3d3d", px:{ sx:'0', md:'2'} }}>

        <Sidebar selectedCategory={selectedCategory}   setSelectedCategory={setSelectedCategory}/>

        <Typography className='copyright'
        variant='body2' sx={{ mt: 1.5, color:'#fff'}}>

          2022 Ajibola's youTube Clone

        </Typography>

      </Box>


      <Box p={2} sx={{ overflow: 'auto', height:'90vh',flex:2 }}>
     

      <Typography variant='h4' 
       fontWeight='bold' mb={2} sx={{ color: 'white' }}
       >
        {selectedCategory}
        <span style={{ color:'#f31503', marginLeft:'6px'}}>

         
          Videos

        
        </span>



      </Typography>


      { video?.length !== 0 ?  <Videos vid={video}/> : <span style={{ color:'white',fontSize:'20px' }}>Fetching Videos......</span> }
      </Box>








    </Stack>
  )
  }
   
export default Feed