import React from 'react'
import '../css/main_smh.css'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import $ from 'jquery'

import ul_one from "../img/20163.png"
import ul_two from "../img/20161.png"
import ul_three from "../img/20162.png"
import ul_four from "../img/20164.png"
import arrow from "../img/arrow.png"
import ul_five from "../img/20165.png"
import ul_six from "../img/20166.png"
import ul_seven from "../img/20167.png"
import ul_eight from "../img/20168.png"
import ul_fine from "../img/20169.png"


import ul_onea from "../img/20171.png"
import ul_twoa from "../img/20172.png"
import ul_threea from "../img/20173.png"
import ul_foura from "../img/20174.png"
import ul_fivea from "../img/20175.png"

import ul_oneb from "../img/20181.png"
import ul_twob from "../img/20182.png"
import ul_threeb from "../img/20183.png"
import ul_fourb from "../img/20184.png"
import ul_fiveb from "../img/20185.png"

import ul_onec from "../img/20191.png"
import ul_twoc from "../img/20192.png"
import ul_threec from "../img/20193.png"
import ul_fourc from "../img/20194.png"
import ul_fivec from "../img/20195.png"
class Main_smh extends React.Component{
	
	constructor(props){
		super(props)
	}	
	render(){
		
		return(
			<Router>
				<div id={"main_smh_mainwrap"}>
					<div className="main_top">
					 
						<h2></h2>
						<div className="main_top_right">
							<p>更多</p>
							<span></span>
						</div>
					</div>
					
					<ul className="my_main_ul">
						<li><Link to="/diy"><img src={ul_one} alt=""/></Link></li>
						<li><Link to="/diy"><img src={ul_two} alt=""/></Link></li>
						<li><Link to="/diy"><img src={ul_three} alt=""/></Link></li>
						<li><Link to="/diy"><img src={ul_four} alt=""/></Link></li>
					</ul>
					
					<div className="main_xian">
						<div className="main_xianxiao">
							<img src={arrow} alt=""/>
						</div>
						
					</div>
					
					<ul className="main_bottom">
						<li>
							<Link to="/diy">
								<div className="main_b_left">
									<img src={ul_onea} alt=""/>
									<div className="main_b_left_left">
										<h2>嗨起来，大儿童们</h2>
										<p>卖女孩的小火柴</p>
										<span>为孩子打造一个缤纷多彩、欢乐自在的娱乐间吧！让他们对童年的充满快乐的记忆！</span>
									</div>
									
								</div>
							</Link>
							
							<ul className="main_b_right">
								<li>
									<img src={ul_twoa} alt=""/>
									<p>卡通小马被子床单四件套</p>
								</li>
								<li>
									<img src={ul_threea} alt=""/>
									<p>儿童涂鸦 艺术壁纸</p>
								</li>
								<li>
									<img src={ul_foura} alt=""/>
									<p>儿童椅造型椅 小马烤漆椅</p>
								</li>
								<li>
									<img src={ul_fivea} alt=""/>
									<p>呆萌小动物卡通抱枕靠枕居家用品 </p>
								</li>
							</ul>
						</li>
						
						<li>
							<Link to="/diy">
								<div className="main_b_left">
									<img src={ul_oneb} alt=""/>
									<div className="main_b_left_left">
										<h2>嗨起来，大儿童们</h2>
										<p>卖女孩的小火柴</p>
										<span>为孩子打造一个缤纷多彩、欢乐自在的娱乐间吧！让他们对童年的充满快乐的记忆！</span>
									</div>
									
								</div>
							</Link>
							
							<ul className="main_b_right">
								<li>
									<img src={ul_twob} alt=""/>
									<p>卡通小马被子床单四件套</p>
								</li>
								<li>
									<img src={ul_threeb} alt=""/>
									<p>儿童涂鸦 艺术壁纸</p>
								</li>
								<li>
									<img src={ul_fourb} alt=""/>
									<p>儿童椅造型椅 小马烤漆椅</p>
								</li>
								<li>
									<img src={ul_fiveb} alt=""/>
									<p>呆萌小动物卡通抱枕靠枕居家用品 </p>
								</li>
							</ul>
						</li>
						
						<li>
							<Link to="/diy">
								<div className="main_b_left">
									<img src={ul_onec} alt=""/>
									<div className="main_b_left_left">
										<h2>嗨起来，大儿童们</h2>
										<p>卖女孩的小火柴</p>
										<span>为孩子打造一个缤纷多彩、欢乐自在的娱乐间吧！让他们对童年的充满快乐的记忆！</span>
									</div>
									
								</div>
							</Link>
							
							<ul className="main_b_right">
								<li>
									<img src={ul_twoc} alt=""/>
									<p>卡通小马被子床单四件套</p>
								</li>
								<li>
									<img src={ul_threec} alt=""/>
									<p>儿童涂鸦 艺术壁纸</p>
								</li>
								<li>
									<img src={ul_fourc} alt=""/>
									<p>儿童椅造型椅 小马烤漆椅</p>
								</li>
								<li>
									<img src={ul_fivec} alt=""/>
									<p>呆萌小动物卡通抱枕靠枕居家用品 </p>
								</li>
							</ul>
						</li>
						
						<li>
							<Link to="/diy">
								<div className="main_b_left">
									<img src={ul_five} alt=""/>
									<div className="main_b_left_left">
										<h2>嗨起来，大儿童们</h2>
										<p>卖女孩的小火柴</p>
										<span>为孩子打造一个缤纷多彩、欢乐自在的娱乐间吧！让他们对童年的充满快乐的记忆！</span>
									</div>
									
								</div>
							</Link>
							
							<ul className="main_b_right">
								<li>
									<img src={ul_six} alt=""/>
									<p>卡通小马被子床单四件套</p>
								</li>
								<li>
									<img src={ul_seven} alt=""/>
									<p>儿童涂鸦 艺术壁纸</p>
								</li>
								<li>
									<img src={ul_eight} alt=""/>
									<p>儿童椅造型椅 小马烤漆椅</p>
								</li>
								<li>
									<img src={ul_fine} alt=""/>
									<p>呆萌小动物卡通抱枕靠枕居家用品 </p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				
				
				
			</Router>
		)
	}
	
	
	componentDidMount(){
		 $('.my_main_ul').find('li').each(function() {
                $(this).mouseover(function() {
                	var _this=this
                	var index = $(_this).index()
                    console.log(index);
                    $('.main_xianxiao').css('left',index*306+'px')
                    $('.main_bottom').find('li').has('ul').eq(index).css("display","block").siblings().css("display","none")
                })
            })
		
	}
	
}


export default Main_smh