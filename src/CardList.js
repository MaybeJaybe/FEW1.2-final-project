import React from 'react';
import Card from './Card';
import data from './animal-list.json';
import './CardList.css';

function CardList() {
    const info = data.map(({name, species, years, description, image}) => {
        return (
            <Card 
            key={name}
            name={name}
            species={species}
            years={years}
            description={description}
            image={image[0]}
            />
        )
    })
    return (
        <div className="CardList">
            {info}
        </div>
    )
}
export default CardList;