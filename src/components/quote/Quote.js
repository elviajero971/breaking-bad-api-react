import './Quote.css';
import {useState, useEffect} from 'react';
import List from '../list/List';
import Spinner from '../spinner/Spinner';


const Quote = () => {
    
    const url = "https://www.breakingbadapi.com/api/quotes";
    
    const [listItem, setListItem] = useState(<Spinner/>);
    const tempArrayList= [];

    useEffect(() => {
        const asyncFunction = async() => {
            try {
                const dataListItem = await fetch(url);
                const jsonDataListItem = await dataListItem.json();
                tempArrayList.push(
                    <List data={jsonDataListItem}/>
                )
            } catch (e) {
                tempArrayList.push(
                    <List data={false} text={"Error"}/>
                )
            }
            setListItem(tempArrayList);
        }
        asyncFunction();
    }, [])
    
    return (
        <div className="listItemContainer">
            {listItem}
        </div>
    )
}

export default Quote;