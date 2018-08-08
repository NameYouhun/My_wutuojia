import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import { Carousel,Button,Icon } from 'antd'
import '../css/sowing_pjl.css'


function onChange(a, b, c){
//console.log(a, b, c);
}

class Sowing extends React.Component{
	constructor(props){
		super(props)
	}

	tap(){
//		console.log('aaa');
	}
	
	render(){
		return(
			<div>
				<Carousel afterChange={onChange} autoplay="true" arrow="true">
				
				    <div className="pic_pjl">
					    <Link to="/idea/1">
					    	<img src={require('../img/164838_512322.jpg')} />
					    	<div className='inner_pjl'>
					    		<span className='circle_pjl plus_pjl'> 
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">加入灵感</p>
					    		</span>
					    		<span className='circle_pjl'>
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">爱心骑士的妹纸</p>
					    		</span>
					    	</div>
					    </Link>
				    </div>
				    
				    
				    
				    
				    <div className="pic_pjl">
					    <Link to="/idea/2">
					    	<img src={require('../img/194526_508211.jpg')} />
					    	<div className='inner_pjl'>
					    		<span className='circle_pjl plus_pjl'> 
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">加入灵感</p>
					    		</span>
					    		<span className='circle_pjl'>
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">我爱大胡子</p>
					    		</span>
					    	</div>
					    </Link>
				    </div>
				    
				    
				    
				    <div className="pic_pjl">
					    <Link to="/idea/3">
					    	<img src={require('../img/201924_244482.jpg')} />
					    	<div className='inner_pjl'>
					    		<span className='circle_pjl plus_pjl'> 
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">加入灵感</p>
					    		</span>
					    		<span className='circle_pjl'>
					    			<Icon type="plus" className='circle_pjl ' />
					    			<p className="add_pjl">精致女人</p>
					    		</span>
					    	</div>
					    </Link>
				    </div>
				</Carousel>
			
			</div>
		)
	}
	
	
	
}

	




export default Sowing;