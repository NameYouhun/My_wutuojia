import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import Sjs_peng from './Sjs_peng.js'


class Designer extends Component {
    render() {
        return (
            <div>
                <Sjs_peng />
            </div>
        );
    }
}

export default Designer;