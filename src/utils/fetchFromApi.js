import axios from 'axios';


  
export const BASE_URL = 'https://youtube-v2.p.rapidapi.com/trending/?lang=en&country=us&section';

const options = {

     params: {
    maxResults: 50,
  },
	headers: {
		'X-RapidAPI-Key': 'abf4604e9bmsh9c4e85f1373146dp1aea09jsn66668faceb89',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};



export const fetchFromAPI  = async (url)=>{

      const response = await fetch(`${BASE_URL}/${url}`,options);

      const data = await response.json();

      return data;

    

    }
