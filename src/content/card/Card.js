import './Card.css';
import { Link } from 'react-router-dom';
import React from 'react';
import {FaBan} from 'react-icons/fa';
const Card = (props) => {
    let childArrayCard=[];
    if (props.data) {
        childArrayCard = props.data.map(
            (cardItem) => {
                return (
                <div className="card-item">
                    <div className="card-img">
                        <img className="img-picture" src={cardItem.img} alt={cardItem.name}/>
                        <FaBan color="red" size="300" className={`img-dead ${cardItem.status === "Deceased" ? "dead" : "alive"}`}/>
                    </div>                  
                    <Link className="link" to={`/characters/${cardItem.name}`}>
                        <div className="item-character">
                            {cardItem.name}
                        </div>
                    </Link>
                </div> 
                )}
        )
    }
    return (
        <div className="cardContainer">
            {childArrayCard}
        </div>
    );
}

export default Card;