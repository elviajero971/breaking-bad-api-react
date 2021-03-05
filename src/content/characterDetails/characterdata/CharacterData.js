import './CharacterData.css';
import {FaBan} from 'react-icons/fa';
const CharacterData = (props) => {
    let childArrayData = [];
    if (props.data){
        childArrayData = props.data.map(
            (data) => {
                let occupationList = data.occupation.map(
                    (occupation) => {
                        return (
                            <p>{occupation}</p>
                        );
                    }
                );
                return (
                    <div className="character-data-container">
                        <div className="character-img">
                            <img className="character-img" src={data.img} alt={data.name}/>
                            <FaBan color="red" size="80px" className={`img-dead ${data.status === "Deceased" ? "dead" : "alive"}`}/>
                    </div>
                        <ul className="data-list">
                            <li>
                                <div className="label">
                                    Name:
                                </div>
                                <div className="content">
                                    {data.name} 
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Nickname:
                                </div>
                                <div className="content">
                                    {data.nickname}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Protrayed:
                                </div>
                                <div className="content">
                                    {data.portrayed}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Status:
                                </div>
                                <div className="content">
                                    {data.status}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Birthday:
                                </div>
                                <div className="content">
                                    {data.birthday}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Category:
                                </div>
                                <div className="content">
                                    {data.category}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    Ocuppation:
                                </div>
                                <div className="content">
                                    {occupationList}
                                </div>
                            </li>
                        </ul>   
                    </div>
                )
            }
        )
    }
    return(
        <div className="characterContainer">
            {childArrayData}
        </div>
    )
}

export default CharacterData;