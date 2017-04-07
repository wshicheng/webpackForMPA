import React from 'react'
import ReactDom from 'react-dom'
import {Router,Route,hashHistory,IndexRoute,Link} from 'react-router'
import Items from './items'
const App = React.createClass({
	
	render:function(){
		return (
			<div>
				
				<Items/>
				
			</div>
		)
	}
})

export default App;