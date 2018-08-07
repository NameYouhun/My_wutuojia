import React from 'react';
import '../css/tjlg_wang.css';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import wang4 from '../img/wang_04.jpg'
import wang6 from '../img/wang_06.jpg'


class Tjlg_wang extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	render(){
		
		return(
			<Router>
				<div className = 'tjlg_wang'>					
					<div className = 'head_wang'>
						<h3></h3>
						<div className = 'right'>
							<span>更多</span>
							<i></i>
						</div>
					</div>
					
					<ul className = 'list2'>
						<li>
							<img className = 'img4_wang' src = {wang6}/>
							<img className = 'img5_wang' src = {wang4}/>
							
							<h6>让书房成为展示空间</h6>
							<h5>归类摆放的层架空间，实木、玻璃、金属等材质互相衬托，让整个书桌一角成为工艺品的的展示间。</h5>
							<span><i></i><em>46</em></span>
						</li>
						
						<li>
							<img className = 'img4_wang' src = {wang6}/>
							<img className = 'img5_wang' src = {wang4}/>
							
							<h6>让书房成为展示空间</h6>
							<h5>归类摆放的层架空间，实木、玻璃、金属等材质互相衬托，让整个书桌一角成为工艺品的的展示间。</h5>
							<span><i></i><em>46</em></span>
						</li>
						
						<li>
							<img className = 'img4_wang' src = {wang6}/>
							<img className = 'img5_wang' src = {wang4}/>
							
							<h6>让书房成为展示空间</h6>
							<h5>归类摆放的层架空间，实木、玻璃、金属等材质互相衬托，让整个书桌一角成为工艺品的的展示间。</h5>
							<span><i></i><em>46</em></span>
						</li>
						
						<li>
							<img className = 'img4_wang' src = {wang6}/>
							<img className = 'img5_wang' src = {wang4}/>
							
							<h6>让书房成为展示空间</h6>
							<h5>归类摆放的层架空间，实木、玻璃、金属等材质互相衬托，让整个书桌一角成为工艺品的的展示间。</h5>
							<span><i></i><em>46</em></span>
						</li>
					</ul>
				</div>
			</Router>
			
			
		)
	}
}

export default Tjlg_wang;