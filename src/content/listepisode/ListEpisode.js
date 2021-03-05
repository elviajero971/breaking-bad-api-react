import './ListEpisode.css';
import { Link } from 'react-router-dom';
const ListEpisode = (props) => {
    let childArrayList=[];
    if(props.data){
        childArrayList = props.data.map(
            (listEpisodeItem) => {
                let episodeCharacter = listEpisodeItem.characters.map(
                    (character) => {
                        return (
                            <Link className="link" to={`/characters/${character}`}>
                                <div className="item-character">
                                    {character}
                                </div>
                            </Link>
                        )
                    }
                );
                return (
                <div className="list-episode">
                    <div className="list-episode-header">
                    <p>Breaking Bad S{listEpisodeItem.season}/E{listEpisodeItem.episode}, {listEpisodeItem.title}</p>
                    </div>
                    <div className="list-episode-characters-title">
                        CharacterList:
                    </div>
                    <div className="list-episode-characters">
                        {episodeCharacter}
                    </div>
                </div>)
            }
        )
    }
    return (
        <div className="listEpisodeContainer">
            {childArrayList}
        </div>
    );
}

export default ListEpisode;