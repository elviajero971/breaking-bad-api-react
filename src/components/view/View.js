import React from 'react';
import { BrowserRouter as Switch, Route} from 'react-router-dom';
import './View.css';
import Home from '../home/Home';
import Character from '../character/Character';
import Episode from '../episode/Episode';
import Quote from '../quote/Quote';
import CharacterDetails from '../characterDetails/CharacterDetails';

const View = () => {
  return (
    <div className="displayContent">
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/characters/:name">
                <CharacterDetails/>
            </Route>
            <Route path="/characters">
                <Character/>
            </Route>
            <Route path="/episodes">
                <Episode/>
            </Route>
            <Route path="/quotes">
                <Quote/>
            </Route>
        </Switch>
    </div>
  );
}

export default View;
