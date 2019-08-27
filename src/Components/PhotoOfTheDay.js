import React from 'react';

const PhotoOfTheDay = (props) => {
    if(!props.photo) {
        return <h2>Loading...</h2>
    }
    return (
        <img className="nasa-photo"src={props.photo} alt="Nasa Photo of the day" />
    )
}
export default PhotoOfTheDay;