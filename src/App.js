import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import {key} from './key';
import PhotoOfTheDay from './Components/PhotoOfTheDay/PhotoOfTheDay';

import styled from 'styled-components';


const AppDiv = styled.div`
  background: lightgray;
`;

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
    <AppDiv>
      <PhotoOfTheDay photo={nasaPhoto.hdurl} date={nasaPhoto.date} title={nasaPhoto.title} desc={nasaPhoto.explanation} />
    </AppDiv>
  );
}

export default App;
