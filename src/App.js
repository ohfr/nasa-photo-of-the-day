import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import {key} from './key';
import PhotoOfTheDay from './Components/PhotoOfTheDay/PhotoOfTheDay';


function App() {
  const [nasaPhoto, setNasaPhoto ] = useState({});  //initiate state as an object
  const [keys] = useState(key);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${keys}`)
        //date, hdurl, media_type, explanation, title, url
      .then(res => setNasaPhoto(res.data))
      .catch(err => console.log(err))
  }, []);
  return (
    <div className="App">
      <PhotoOfTheDay photo={nasaPhoto.hdurl} date={nasaPhoto.date} title={nasaPhoto.title} desc={nasaPhoto.explanation} />
    </div>
  );
}

export default App;
