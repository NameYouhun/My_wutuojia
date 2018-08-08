
import React from 'react'
import Sowing from './sowing_peng.js'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import Main_wang from "./main_wang"
import Tjlg_wang from './tjlg_wang'
import Xgzn_wang from './xgzn_wang'
import Lbt_peng from './lbt_peng'
import Main_smh from './main_smh'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {/*按顺序排列组件*/}
                <Sowing />
                <Main_wang></Main_wang>
                <Main_smh></Main_smh>
                <Tjlg_wang></Tjlg_wang>              
				<Xgzn_wang></Xgzn_wang>
				<Lbt_peng />
            </div>
        )
    }
}


export default Home
