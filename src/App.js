import React, {useState} from 'react';
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem } from 'react-pro-sidebar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import './App.css';
import {FaAngleLeft} from 'react-icons/fa';
import {FaAngleRight} from 'react-icons/fa';
import {FaAngleUp} from 'react-icons/fa';
import {FaChild} from 'react-icons/fa';
import {FaThList} from 'react-icons/fa';
import {FaAlignCenter} from 'react-icons/fa';
import Home from './content/home/Home';
import Character from './content/character/Character';
import Episode from './content/episode/Episode';
import Quote from './content/quote/Quote';
import CharacterDetails from './content/characterDetails/CharacterDetails';

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div className="App">
      <div className="menuContainer">
        <ProSidebar
          collapsed={collapsed} 
        >
            <SidebarHeader>
            <Menu>
              <MenuItem onClick={()=>{(collapsed === true) ? setCollapsed(false) : setCollapsed(true)}} icon={(collapsed === true) ? <FaAngleLeft /> : <FaAngleRight />}></MenuItem>
              <MenuItem>Breaking Bad</MenuItem>
            </Menu>
            </SidebarHeader>
            <SidebarContent>
            <Menu iconShape="square">
            <MenuItem icon={<FaAngleUp />}>
              Root
              <Link to="/" />
            </MenuItem>
            <MenuItem icon={<FaChild />}>
              Characters
              <Link to="/characters" />
            </MenuItem>
            <MenuItem icon={<FaThList />}>
              Episodes
              <Link to="/episodes" />
            </MenuItem>
            <MenuItem icon={<FaAlignCenter />}>
              Quote
              <Link to="/quotes" />
            </MenuItem>
            </Menu>
            </SidebarContent>
        </ProSidebar>
      </div>
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
      </div>
    </Router>
  );
}

export default App;
