import React from 'react'
import '../css/header_li.css'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import logo from '../img/logo.png'


class Header_li extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Router>
                <div id={"header_wrap_lzh"}>
                    <div className="fl header_fl_lzh">
                        <Link to="/home" className="fl">
                            <img src={logo} alt=""/>
                        </Link>
                        <ul className="fl header_nav_lzh">
                            <li onClick={this.tap.bind(this)}><Link to="/home">首页</Link></li>
                            <li onClick={this.tap.bind(this)}><Link to="/diy" >搭配</Link></li>
                            <li className="zg_li_lzh" onClick={this.tap.bind(this)}><Link to="/item">商家</Link><span className="zg_span_lzh">大厂直供</span></li>
                            <li onClick={this.tap.bind(this)}><Link to="/idea">灵感</Link></li>
                        </ul>
                        <div className="fl header_ss_lzh">
                            <Link to="/home" className="header_icon_lzh"></Link>
                        </div>
                    </div>
                    <div className="fr header_fr_lzh">
                        <div className="fl header_fr_tp_lzh">
                            <Link to="/home">
                                <span className="fl header_fr_tp_span1_lzh"></span>
                                <span>创建搭配</span>
                            </Link>
                        </div>
                        <div className="fl header_fr_login_lzh">
                            <i></i>
                            <em></em>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
    tap(){
        window.location.reload();
    }


}


export default Header_li