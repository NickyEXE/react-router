import React from 'react';
import './App.css';
import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/login" render={routeProps => <Auth cheese={"batman"} {...routeProps} />} />
          <Route path="/help" component={Help} />
          <Route path="/pets/:id" component={PetProfile} />
          <Route path="/pets" component={PetIndex} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
