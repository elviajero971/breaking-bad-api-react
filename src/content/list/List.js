import './List.css';
import { Link } from 'react-router-dom';

const List = (props) => {
    let childArrayList=[];
    if(props.data){
        childArrayList = props.data.map(
            (listItem) => {
                return (
                <div className="list-item">
                    <div className="list-item-text">
                    {listItem.quote}
                    </div>
                    <div className="list-item-author">
                        Author:
                    </div>
                    <Link className="link" to={`/characters/${listItem.author}`}>
                        {listItem.author}
                    </Link>
                </div>)
            }
        )
    }
    return (
        <div className="listItemContainer">
            {childArrayList}
        </div>
    );
}

export default List;