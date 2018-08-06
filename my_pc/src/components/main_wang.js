import React from 'react';
import '../css/main_wang.css'
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import wang from '../img/wang_01.png'
import wang1 from '../img/wang_02.png'
import wang2 from '../img/wang_03.jpg'

class Main_wang extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	render(){		
		return(			
			<Router>
				<div className = 'top_wang'>
					<h2 className='bt_wang'></h2>
					<div className = 'list_wang'>
						<ul className = 'list1_wang'>
							<li>
								<div className='t1_wang'>
									<img className = 'img1_wang' src={wang1}/>
									<img className = 'img2_wang' src={wang}/>
								</div>
								
								<div className = 't3_wang'>
									<img className = 'img3_wang' src={wang2}/>									
									<a href = '#'>思品家居</a>						
									<div className = 't4_wang'>
										<p className = 'left_wang'>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
										<i className = 'i_wang'>大厂直招</i>
									</div>
									
									<div className = 'smill_wang'>
										<em>￥</em>
										<span>4464.00</span>
									</div>
									
									<h6 className = 'b_wang'></h6>
									
									<div className='size_wang'>
										<label>规格尺寸:</label>
										<div>
											单人位：800L*800W*880Hmm<br/>
											三人位：1800L*800W*880Hmm<br/>
											二人位：1400L*800W*880Hmm
										</div>
									</div>
								</div>
								
								<div className='t2_wang'>
									<span>思品家居</span>
									<p>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
									<span className='s1_wang'>布艺沙发</span>
								</div>
							</li>
							
							
						</ul>
					</div>
				</div>
			</Router>
			
		)
	}
}

export default Main_wang;