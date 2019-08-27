import React from 'react';

const Title = (props) => {
    if (!props.title) {
        return <h1>Loading...</h1>
    }
    return (
        <h1>{props.title}</h1>
    )
}

export default Title;