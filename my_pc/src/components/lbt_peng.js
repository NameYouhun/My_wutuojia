import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Link,Route,Redirect,Switch}from 'react-router-dom'
import { Carousel,Button,Icon } from 'antd'
import '../css/lbt_pjl.css'
import 'antd/dist/antd.css'



class Lbt_peng extends React.Component{
	constructor(props){
		super(props)
	}

	
	
	render(){
		return(
			<div>
				
				 <Carousel  className='lbt2_pjl' arrow={true}>
				    <div className='fen_pjl'>
				    	<div className='dczg_pjl'>
				    	</div>
				    	
				    	<div className='left_pjl'>
				    		<div className='top_pjl'>
				    			<img src={require("../img/194319_287341.jpg")} className='pho_pjl'/>
				    		</div>
							<h2 className="cen_pjl">小空间,大智慧</h2>
							<p className="cen_pjl">追求全实木情怀</p>
				    	</div>
				    	
				    	
				    	<div className='right_pjl'>
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    	</div>
				    </div>
				    
				    
				    
				    
				    
				    <div className='fen_pjl'>
				    	<div className='dczg_pjl'>
				    	</div>
				    	
				    	<div className='left_pjl'>
				    		<div className='top_pjl'>
				    			<img src={require("../img/194319_287341.jpg")} className='pho_pjl'/>
				    		</div>
							<h2 className="cen_pjl">小空间,大智慧</h2>
							<p className="cen_pjl">追求全实木情怀</p>
				    	</div>
				    	
				    	
				    	<div className='right_pjl'>
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    	</div>
				    </div>
				    
				    
				    
				    <div className='fen_pjl'>
				    	<div className='dczg_pjl'>
				    	</div>
				    	
				    	<div className='left_pjl'>
				    		<div className='top_pjl'>
				    			<img src={require("../img/194319_287341.jpg")} className='pho_pjl'/>
				    		</div>
							<h2 className="cen_pjl">小空间,大智慧</h2>
							<p className="cen_pjl">追求全实木情怀</p>
				    	</div>
				    	
				    	
				    	<div className='right_pjl'>
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    	</div>
				    </div>
				    
				    
				    
				    
				    <div className='fen_pjl'>
				    	<div className='dczg_pjl'>
				    	</div>
				    	
				    	<div className='left_pjl'>
				    		<div className='top_pjl'>
				    			<img src={require("../img/194319_287341.jpg")} className='pho_pjl'/>
				    		</div>
							<h2 className="cen_pjl">小空间,大智慧</h2>
							<p className="cen_pjl">追求全实木情怀</p>
				    	</div>
				    	
				    	
				    	<div className='right_pjl'>
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    		
				    		<dl className="dl_pjl">
				    			<dt className='lbtdt_pjl'><img src={require("../img/135848_111376.png")} className='lpic_pjl'/></dt>
				    			<dd>
				    				<p className="tit_pjl">骏业8090系列现代中式橡木红樱桃色墙壁酒架</p>
				    				<p className='tit_pjl'>$995.00</p>
				    			</dd>
				    		</dl>
				    	</div>
				    </div>
				    
				    
				    
				    
				    
				  </Carousel>
				
				
				
			</div>
		)
	}
	
	
	
}

	




export default Lbt_peng;