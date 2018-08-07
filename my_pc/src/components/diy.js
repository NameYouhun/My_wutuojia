import React from 'react'

import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import '../css/diy.css'
/*import Fangan from "./fangan_smh";*/
import Theme from "./theme";
import Designer from "./designer";

class Diy extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <div>
                    <div className="diy_top_router_lzh">
                        <Link to='fangan' className='diy_top_link_lzh diy_border_lzh'>方案</Link>
                        <Link to='theme' className='diy_top_link_lzh diy_margin_lzh'>主题</Link>
                        <Link to='designer' className='diy_top_link_lzh'>设计师</Link>
                    </div>
                    <div>
                       {/* <Route path="/fangan" component={Fangan}></Route>*/}
                        <Route path="/theme" component={Theme}></Route>
                        <Route path="/designer" component={Designer}></Route>
                        <Redirect to="/fangan"/>
                    </div>
                </div>
            </Router>
        )
    }
}


export default Diy