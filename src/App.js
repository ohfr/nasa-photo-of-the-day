import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import {key} from './key';
import PhotoOfTheDay from './Components/PhotoOfTheDay';
import Title from './Components/Title';
import Description from './Components/Description';

function App() {
  const [nasaPhoto, setNasaPhoto ] = useState({});  //initiate state as an object
  const [keys] = useState(key);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
        //date, hdurl, media_type, explanation, title, url
      .then(res => setNasaPhoto(res.data))
      .catch(err => console.log(err))
  }, []);
  return (
    <div className="App">
      <Title title={nasaPhoto.title}/>
      <Description desc={nasaPhoto.explanation}/>
      <PhotoOfTheDay photo={nasaPhoto.hdurl} />
    </div>
  );
}

export default App;
