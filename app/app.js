var React = require('react');
var ReactDOM = require('react-dom');

var Footer  = require('./components/footer.components.jsx');
var Details = require('./components/details.components.jsx');
var Player  = require('./components/player.components.jsx');

var App = React.createClass({
	render: function(){
		return(
			<div>
				<Details title={'Track title'}/>
				<Player />
				<Footer/>
			</div>
			);
	}
});

ReactDOM.render( < App / > ,document.getElementById('content'));