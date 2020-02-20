import React from 'react';
import PhotoCardContainer from './PhotoCardContainer';

const PhotoCard = props => {
    console.log('pc props', props)
    return(
        <div>
            <h1><strong>{props.title}</strong></h1>
            <h2>by: {props.by}</h2>
            <img src={props.image} alt={props.description} ></img>
            
        </div>
    )

}

export default PhotoCard;