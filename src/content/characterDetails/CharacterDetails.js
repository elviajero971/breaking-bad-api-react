import './CharacterDetails.css';
import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import Spinner from '../spinner/Spinner';
import CharacterData from './characterdata/CharacterData';
const CharacterDetails = () => {
    let { name } = useParams();
    let url = `https://www.breakingbadapi.com/api/characters?name=${name}`;
    let urlModified = url.replace(/%/g, "+");
    const [characterDetails, setCharacterDetails] = useState(<Spinner/>);
    let characterData=[];
    useEffect(() => {
        const asyncFunction = async() => {
            try {
                const dataDetailsCharacter = await fetch(urlModified);
                const jsonData = await dataDetailsCharacter.json();
                characterData.push(
                    <CharacterData data={jsonData}/>    
                );
            } catch (e) {
                characterData.push(
                    <CharacterData data={false} text={"Error"}/>
                );
            }
            setCharacterDetails(characterData);
            console.log(characterData);
        }
        asyncFunction();
    }, [])
    
    return (
        <div className="character-details">
            {characterDetails}
        </div>
    )
}

export default CharacterDetails;