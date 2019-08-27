import React from 'react';
import Date from './Date';
import Description from './Description';
import Title from './Title';
import Photo from './Photo';


const PhotoOfTheDay = (props) => {
    return (
        <div className="PhotoApp">
            <Title title={props.title} />
            <Date date={props.date} />
            <Description desc={props.desc} />
            <Photo photo={props.photo} />
        </div>
    )
}
export default PhotoOfTheDay;