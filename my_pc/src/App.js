import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import './App.css';
import Home from './components/home'
import Diy from './components/diy'
import Item from './components/item'
import Idea from './components/idea'
import Header_li from './components/header_li'
import Footer from './components/footer'
class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Header_li/>
              <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/diy" component={Diy}></Route>
                  <Route path="/item" component={Item}></Route>
                  <Route path="/idea" component={Idea}></Route>
                  <Redirect to="/home"/>
              </Switch>
              <Footer></Footer>
          </div>
        </Router>
    );
  }
}

export default App;
