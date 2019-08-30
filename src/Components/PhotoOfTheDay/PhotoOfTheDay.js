import React from 'react';
import Date from './Date';
import Description from './Description';
import Title from './Title';
import Photo from './Photo';
import styled from 'styled-components';


const WrapperDiv = styled.div`
    text-align: center;
`

const PhotoOfTheDay = (props) => {
    return (
        <WrapperDiv>
            <Title>{props.title}</Title>
            <Date date={props.date} />
            <Description>{props.desc}</Description>
            <Photo photo={props.photo} />
        </WrapperDiv>
    )
}
export default PhotoOfTheDay;