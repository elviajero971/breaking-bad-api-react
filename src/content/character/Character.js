import './Character.css';
import {useState, useEffect} from 'react';
import Card from '../card/Card';
import Spinner from '../spinner/Spinner';

const Character = () => {
    
    const url = "https://www.breakingbadapi.com/api/characters";

    const [cardListItem, setCardListItem] = useState(<Spinner/>);
    const tempArrayCard= [];
    useEffect(() => {
        const asyncFunction = async() => {
            try {
                const dataCard = await fetch(url);
                const jsonDataCard = await dataCard.json();
                tempArrayCard.push(
                    <Card data={jsonDataCard}/>
                )
            } catch (e) {
                tempArrayCard.push(
                    <Card data={false} text={"Error"}/>
                )
            }
            setCardListItem(tempArrayCard);
        }
        asyncFunction();
    }, [])
    
    return (
        <div className="character">
            {cardListItem}
        </div>
    )
}

export default Character;