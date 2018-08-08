import React from 'react'

import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import List_wang from './list_wang'


class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
               <List_wang></List_wang>
            </div>
        )
    }
}


export default Item;