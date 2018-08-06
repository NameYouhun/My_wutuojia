

import React from 'react'

import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import Main_wang from "./main_wang"
import Tjlg_wang from './tjlg_wang'
import Xgzn_wang from './xgzn_wang'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/*按顺序排列组件*/}
                <Main_wang></Main_wang>
                <Tjlg_wang></Tjlg_wang>
				
				<Xgzn_wang></Xgzn_wang>
            </div>
        )
    }
}


export default Home
