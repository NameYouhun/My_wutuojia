import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import { Carousel,Button,Icon } from 'antd'
import '../css/sowing_pjl.css'


function onChange(a, b, c){
  console.log(a, b, c);
}

class Sowing extends React.Component{
	constructor(props){
		super(props)
	}

	tap(){
		console.log('aaa');
	}
	
	render(){
		return(
			<div className="outer_pjl">
					<ul className='section_pjl'>
						<li className="li_pjl">风格
								<div className="sec_pjl">
										<ul>
												<li className="secli_pjl">欧式</li>
												<li className="secli_pjl">田园</li>
												<li className="secli_pjl">新中式</li>
												<li className="secli_pjl">简约现代</li>
												<li className="secli_pjl">地中海</li>
												<li className="secli_pjl">工业风</li>
												<li className="secli_pjl">简欧</li>
												<li className="secli_pjl">欧式古典</li>
												<li className="secli_pjl">传统中式</li>
										</ul>
										<ul>
												<li className="secli_pjl">北欧/宜家</li>
												<li className="secli_pjl">东南亚</li>
												<li className="secli_pjl">新古典</li>
												<li className="secli_pjl">日式</li>
												<li className="secli_pjl">韩式</li>
												<li className="secli_pjl">新亚洲</li>
												<li className="secli_pjl">Art Deco</li>
										</ul>
										<ul>
												<li className="secli_pjl">复古怀旧</li>
												<li className="secli_pjl">美式</li>
												<li className="secli_pjl">法式</li>
												<li className="secli_pjl">简约</li>
												<li className="secli_pjl">前卫</li>
										</ul>
								</div>
								
						
						</li>
						<li className="li_pjl">
								空间
								<div className="sec_pjl">
										<ul>
												<li className="secli_pjl">客厅</li>
												<li className="secli_pjl">卧室</li>
												<li className="secli_pjl">厨房</li>
												<li className="secli_pjl">餐厅</li>
												<li className="secli_pjl">卫浴间</li>
												
										</ul>
										<ul>
												<li className="secli_pjl">衣帽间</li>
												<li className="secli_pjl">书房</li>
												<li className="secli_pjl">儿童房</li>
												<li className="secli_pjl">男孩儿房</li>
												<li className="secli_pjl">女孩儿房</li>
											
										</ul>
										<ul>
												<li className="secli_pjl">婴儿房</li>
												<li className="secli_pjl">玄关</li>
												<li className="secli_pjl">阳台</li>
												<li className="secli_pjl">角落</li>
												<li className="secli_pjl">花园</li>
										</ul>
								</div>		
						</li>
						<li className="li_pjl">
								家具
								<div className="sec_pjl">
										<ul>
												<li className="secli_pjl">玄关台</li>
												<li className="secli_pjl">衣柜</li>
												<li className="secli_pjl">床</li>
												<li className="secli_pjl">床头柜</li>
												<li className="secli_pjl">茶几</li>
												
										</ul>
										<ul>
												<li className="secli_pjl">沙发</li>
												<li className="secli_pjl">书桌</li>
												<li className="secli_pjl">餐桌</li>
												
										</ul>
									
								</div>
						</li>
						<li className="li_pjl">
								主题
								<div className="sec_pjl">
										<ul>
												<li className="secli_pjl">宜家</li>
												<li className="secli_pjl">小清新</li>
												<li className="secli_pjl">小户型</li>
												<li className="secli_pjl">背景墙</li>
												<li className="secli_pjl">壁咚女人心</li>
												
										</ul>
										<ul>
												<li className="secli_pjl">个性色彩</li>
												<li className="secli_pjl">彪悍的空间利用</li>
												<li className="secli_pjl">开放式厨房</li>
												<li className="secli_pjl">我们都是粉色控</li>
												<li className="secli_pjl">我们都是重口味</li>
											
										
										</ul>
										<ul>
												<li className="secli_pjl">童趣</li>
												<li className="secli_pjl">睡公主</li>
												<li className="secli_pjl">最炫华丽风</li>
												<li className="secli_pjl">为青春造势</li>
												<li className="secli_pjl">高科技智能</li>
											</ul>
									</div>		
							</li>
					</ul>
		
		
				<Carousel afterChange={onChange} autoplay="true" arrow="true" className="lb_pjl">
						
			    	
			    		
				    <div className="pic_pjl">
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
				    </div>
				    
				    
				    
				    
				    <div className="pic_pjl">
				    		
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
				    </div>
				    
				    
				    
				    <div className="pic_pjl">
				    		
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
				    </div>
				</Carousel>
			
			</div>
		)
	}
	
	
	
}

	




export default Sowing;