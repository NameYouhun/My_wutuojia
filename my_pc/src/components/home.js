import React from 'react';

import Main_wang from './main_wang'
import Tjlg_wang from './tjlg_wang'
import Xgzn_wang from './xgzn_wang'

class Home extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			
			<div>
				<Main_wang></Main_wang>
				
				<Tjlg_wang></Tjlg_wang>
				
				<Xgzn_wang></Xgzn_wang>
			</div>
			
		)
	}
}

export default Home;