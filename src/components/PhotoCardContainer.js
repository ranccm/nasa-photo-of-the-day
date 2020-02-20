import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from "./PhotoCard";


const PhotoCardContainer = ( ) => {

const [data, setData] = useState([]);
  
useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => {
    console.log(res.data);
      setData(res.data)
    })
  .catch(err => {
    console.log("oops", err);
  });
}, []);

return (
    <div>
        <PhotoCard
        title={data.title}
        image={data.url}
        description={data.explanation}
        by={data.copyright} 
        />
    </div>
);
};

export default PhotoCardContainer;