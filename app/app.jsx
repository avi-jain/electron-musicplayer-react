var React = require('react');
var ReactDOM = require('react-dom');
var AppContainer = require('./containers/app.container.jsx');

var App = React.createClass({
	
	render: function(){
		
		return(
			<div>
				<AppContainer />
			</div>
			);
	}
});

ReactDOM.render( < App / > ,document.getElementById('content'));