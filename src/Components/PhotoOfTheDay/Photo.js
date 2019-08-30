import React from 'react';

const Photo = (props) => {
    if(!props.photo) {
        return <h2>Loading...</h2>
    }
    return (
        <img className="nasa-photo" src={props.photo} alt={props.alt} />
    )
}
export default Photo;