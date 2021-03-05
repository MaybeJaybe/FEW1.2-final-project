import React from 'react';
import './Card.css';

function Card(props) {
    const{name, species, years, description, image} = props
    return (
        <div className="Card">
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="200" height="200" alt="img-name"/>
            <h2>{name}</h2>
            <h4>{species}</h4>
            <div>{years}</div>
            <p>{description}</p>
        </div>
    )
}
export default Card;