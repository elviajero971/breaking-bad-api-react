import './Episode.css';
import {useState, useEffect} from 'react';
import ListEpisode from '../listepisode/ListEpisode';
import Spinner from '../spinner/Spinner';

const Episode = () => {
    
    const url = "https://www.breakingbadapi.com/api/episodes";

    const [listItem, setListItem] = useState(<Spinner/>);
    const tempArrayList= [];

    useEffect(() => {
        const asyncFunction = async() => {
            try {
                const dataListItem = await fetch(url);
                const jsonDataListItem = await dataListItem.json();
                tempArrayList.push(
                    <ListEpisode data={jsonDataListItem}/>
                )
            } catch (e) {
                tempArrayList.push(
                    <ListEpisode data={false} text={"Error"}/>
                )
            }
            setListItem(tempArrayList);
        }
        asyncFunction();
    }, [])
    
    return (
        <div className="listEpisodeItemContainer">
            {listItem}
        </div>
    )
}

export default Episode;