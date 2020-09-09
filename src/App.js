import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Tours from './containers/TourList/TourList'
class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/tours" component={Tours}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
  }
  
}

export default App;
