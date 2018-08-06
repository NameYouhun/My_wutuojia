import React from 'react';

import '../css/xgzn_wang.css';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import wang7 from '../img/wang_07.jpg'
import wang8 from '../img/wang_08.jpg'
import wang9 from '../img/wang_09.jpg'
import wang10 from '../img/wang10.jpg'

class Xgzn_wang extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<Router>			
				<div className = 'tp_wang'>
					<div className = 'xg_wang'>
						<h3></h3>
						<div className = 'rig_wang'>
							<span>更多</span>
							<i></i>
						</div>
					</div>
					
					<ul className = 'list4'>
						<li className = 'li1'>
							<div className = 'gm_wang'>
								<div className = 'gc_wang'>
									<h2>玻璃杯有毒吗？</h2>
									<p>五彩缤纷的玻璃杯总是让人心动，但高温、速冻是否会析出毒素...</p>
								</div>
							</div>
							<img src = {wang7}/>
						</li>
						<li className = 'li2'>
							<div className = 'gm2_wang'>
								<div className = 'gc2_wang'>
									<h2>— 仿似牛奶般丝滑 —</h2>
									<p>学选真正蚕丝被</p>									
								</div>
								<img src = {wang8}/>
							</div>
							
							<div className = 'gm2_wang'>
								<div className = 'gc2_wang'>
									<h2>— 仿似牛奶般丝滑 —</h2>
									<p>学选真正蚕丝被</p>									
								</div>
								<img src = {wang9}/>
							</div>
						</li>
						
						<li className = 'li3'>
							<img src = {wang10}/>
							
							<div className = 'gc3_wang'>
								<h2>滚筒洗衣机最好</h2>
								<p>干净又省事</p>									
							</div>
						</li>
						
						
						
					</ul>
					
					
					
				</div>
			</Router>
		)
	}
}


export default Xgzn_wang;
