import React from 'react'
import Sowing from './sowing_peng.js'
import Header_li from './header_li.js'
class Home extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<Header_li/>
				<Sowing />
			</div>
		)
	}
}

export default Home;