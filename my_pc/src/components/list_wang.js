import React from 'react';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import '../css/list_wang.css'
import w1 from '../img/w_1.png'
import w2 from '../img/w_2.png'
import w3 from '../img/w3.jpg'
import w6 from '../img/w6.png'
import w7 from '../img/w7.jpg'
import w8 from '../img/w8.png'
import top2 from '../img/top2.png'
import we1 from '../img/we1.jpg'
import w5 from '../img/w5.png'

import $ from 'jquery'
class List_wang extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<Router>
				<div className = 'nav_wang'>
					<div className = 'ww_wang'>
						<ul className = 'list6_wang'>
							<li>
								<div className = 'home_wang'>
									<i className = 'icon_wang'></i>
									客厅
								</div>
								
								<div className = 'bot_wang'>
									<span>沙发</span>
									<span>电视柜</span>
									<span>茶几</span>
									<span>置物架</span>
									<span>地毯</span>
								</div>
							</li>
							
							<li>
								<div className = 'home_wang'>
									<i className = 'icon_wang'></i>
									卧室
								</div>
								
								<div className = 'bot_wang'>
									<span>床</span>
									<span>衣柜</span>
									<span>梳妆台/桌</span>
									<span>床头柜</span>
									<span>床尾凳</span>
								</div>
							</li>
							
							<li>
								<div className = 'home_wang'>
									<i className = 'icon_wang'></i>
									餐厅
								</div>
								
								<div className = 'bot_wang'>
									<span>餐桌</span>
									<span>餐椅</span>
									<span>酒柜</span>
									<span>餐边柜</span>
									<span>吧台</span>
								</div>
							</li>
							
							<li>
								<div className = 'home_wang'>
									<i className = 'icon_wang'></i>
									书房
								</div>
								
								<div className = 'bot_wang'>
									<span>书柜</span>
									<span>书桌</span>
									<span>懒人沙发</span>
									<span>电脑桌</span>
									<span>书架/书报架</span>
								</div>
							</li>
							
							<li>
								<div className = 'home_wang'>
									<i className = 'icon_wang'></i>
									门厅
								</div>
								
								<div className = 'bot_wang'>
									<span>玄关台</span>
									<span>门厅/玄关台</span>
									<span>鞋柜</span>
									<span>花架/花几</span>								
								</div>
							</li>
						</ul>
					</div>
					
					
					<div className = 'banner_wang'>
						<div className = 'last_wang'>
							<h2>精选商品</h2>
							<div className = 'more_wang'>
								<span>床</span>
								<span>沙发</span>
								<span>餐桌</span>
								<span>茶几</span>
								<span>床头柜</span>
								<span className = 'ss3_wang'>
									<em>更多</em>
									<i></i>
								</span>
							</div>
						</div>
						
						<ul className = 'list8_wang'>
							<li>
								<div className='rec_wang'></div>								
								<div className='rec2_wang'>																
									<div className='t1_wang'>
										<img className = 'img1_wang' src={w1}/>
										<img className = 'img2_wang' src={w2}/>
									</div>
									
									<div className = 't3_wang'>
										<img className = 'img3_wang' src={w3}/>									
										<a href = '#'>帕拉多米</a>						
										<div className = 't4_wang'>
											<p className = 'left_wang'>帕拉多米北欧风格羊绒黄色木脚喷漆休闲椅</p>
											<i className = 'i_wang'>其他椅子</i>
										</div>
										<br/>
										<div className = 'smill_wang'>
											<em>￥</em>							
											<span>1600.00</span>
										</div>					
										<h6 className = 'b_wang'></h6>
										<div className='size_wang'>
											<label>规格尺寸:</label>
											<div>
												单人位：900*750*1080Hmm									
											</div>
										</div>
									</div>									
									<div className='t2_wang'>
										<span>帕拉多米</span>
										<p>帕拉多米北欧风格羊绒黄色木脚喷漆休闲椅</p>
										<span className='s1_wang'>布艺沙发</span>
									</div>								
								</div>
							</li>
							
							<li>
								<div className='rec_wang'></div>								
								<div className='rec2_wang'>																
									<div className='t1_wang'>
										<img className = 'img1_wang' src={w1}/>
										<img className = 'img2_wang' src={w2}/>
									</div>
									
									<div className = 't3_wang'>
										<img className = 'img3_wang' src={w3}/>									
										<a href = '#'>思品家居</a>						
										<div className = 't4_wang'>
											<p className = 'left_wang'>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
											<i className = 'i_wang'>大厂直招</i>
										</div>
										<br/>
										<div className = 'smill_wang'>
											<em>￥</em>							
											<span>4464.00</span>
										</div>					
										<h6 className = 'b_wang'></h6>
										<div className='size_wang'>
											<label>规格尺寸:</label>
											<div>
												单人位：800L*800W*880Hmm									
											</div>
										</div>
									</div>									
									<div className='t2_wang'>
										<span>思品家居</span>
										<p>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
										<span className='s1_wang'>布艺沙发</span>
									</div>								
								</div>
							</li>
							
							<li>
								<div className='rec_wang'></div>								
								<div className='rec2_wang'>																
									<div className='t1_wang'>
										<img className = 'img1_wang' src={w1}/>
										<img className = 'img2_wang' src={w2}/>
									</div>
									
									<div className = 't3_wang'>
										<img className = 'img3_wang' src={w3}/>									
										<a href = '#'>思品家居</a>						
										<div className = 't4_wang'>
											<p className = 'left_wang'>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
											<i className = 'i_wang'>大厂直招</i>
										</div>
										<br/>
										<div className = 'smill_wang'>
											<em>￥</em>							
											<span>4464.00</span>
										</div>					
										<h6 className = 'b_wang'></h6>
										<div className='size_wang'>
											<label>规格尺寸:</label>
											<div>
												单人位：800L*800W*880Hmm									
											</div>
										</div>
									</div>									
									<div className='t2_wang'>
										<span>思品家居</span>
										<p>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
										<span className='s1_wang'>布艺沙发</span>
									</div>								
								</div>
							</li>
							
							<li>
								<div className='rec_wang'></div>								
								<div className='rec2_wang'>																
									<div className='t1_wang'>
										<img className = 'img1_wang' src={w1}/>
										<img className = 'img2_wang' src={w2}/>
									</div>
									
									<div className = 't3_wang'>
										<img className = 'img3_wang' src={w3}/>									
										<a href = '#'>思品家居</a>						
										<div className = 't4_wang'>
											<p className = 'left_wang'>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
											<i className = 'i_wang'>大厂直招</i>
										</div>
										<br/>
										<div className = 'smill_wang'>
											<em>￥</em>							
											<span>4464.00</span>
										</div>					
										<h6 className = 'b_wang'></h6>
										<div className='size_wang'>
											<label>规格尺寸:</label>
											<div>
												单人位：800L*800W*880Hmm									
											</div>
										</div>
									</div>									
									<div className='t2_wang'>
										<span>思品家居</span>
										<p>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
										<span className='s1_wang'>布艺沙发</span>
									</div>								
								</div>
							</li>
							
							<li>
								<div className='rec_wang'></div>								
								<div className='rec2_wang'>																
									<div className='t1_wang'>
										<img className = 'img1_wang' src={w1}/>
										<img className = 'img2_wang' src={w2}/>
									</div>
									
									<div className = 't3_wang'>
										<img className = 'img3_wang' src={w3}/>									
										<a href = '#'>思品家居</a>						
										<div className = 't4_wang'>
											<p className = 'left_wang'>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
											<i className = 'i_wang'>大厂直招</i>
										</div>
										<br/>
										<div className = 'smill_wang'>
											<em>￥</em>							
											<span>4464.00</span>
										</div>					
										<h6 className = 'b_wang'></h6>
										<div className='size_wang'>
											<label>规格尺寸:</label>
											<div>
												单人位：800L*800W*880Hmm									
											</div>
										</div>
									</div>									
									<div className='t2_wang'>
										<span>思品家居</span>
										<p>斯品北欧宜家绦棉面料深蓝色布艺沙发</p>
										<span className='s1_wang'>布艺沙发</span>
									</div>								
								</div>
							</li>
						</ul>
					</div>
					
					
					<div className = 'pp_wang'>
						<div className = 'head2_wang'>
							<h2>TOP品牌</h2>
							<div className = 'right2'>
								<span>更多</span>
								<i></i>
							</div>
						</div>
						<div className = 'mboo_wang'>
							<div className = 'mleft_wang'>
								<div>
									<ul>
										<li><img className = 'i1_wang' src={w6}/></li>
										<li className = 'mm1_wang'><img className = 'i2_wang' src={w7}/></li>
										<li className = 'mm2_wang'><img className = 'i3_wang' src={w8}/></li>
									</ul>
									<h2>
										<span>追求跳跃性配色</span>
									</h2>
								</div>																
							</div>	
							
							<div className = 'mright_wang'>
								<ul className = 'to_wang'>
									<li>
										<h2>
											<img className = 'ie2_wang' src={w5}/>
										</h2>
										<h3><img className = 'ie3_wang' src={top2}/></h3>
										<h4><img className = 'ie4_wang' src={we1}/></h4>
									</li>
									<li>
										<h2>
											<img className = 'ie2_wang' src={w5}/>
										</h2>
										<h3><img className = 'ie3_wang' src={top2}/></h3>
										<h4><img className = 'ie4_wang' src={we1}/></h4>
									</li>
									
									<li>
										<h2>
											<img className = 'ie2_wang' src={w5}/>
										</h2>
										<h3><img className = 'ie3_wang' src={top2}/></h3>
										<h4><img className = 'ie4_wang' src={we1}/></h4>
									</li>
								</ul>
								
								
								<ul className = 'to2_wang'>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
									<li className = 'too2_wang'><img className = 'i2_wang' src={w7}/></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Router>
			
		)
	}
	
	componentDidMount(){
		$('.rec2_wang').hover(function(){			
			$(this).children('.t3_wang').stop(true,false).slideToggle('show')			
		},function(){			
			$(this).children('.t3_wang').hide()		
		})
	}
}

export default List_wang;
