var React = require('react');
var ReactDOM = require('react-dom');
var AppContainer = require('./containers/app.container.jsx');

var App = React.createClass({
	
	render: function(){
		
		var bgImage = {
    		backgroundImage : "public/img/" 
  		};
		return(
			<div style={bgImage}>
				<AppContainer />
			</div>
			);
	}
});

ReactDOM.render( < App / > ,document.getElementById('content'));