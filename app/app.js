var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
	render: function(){
		return(
				<form>
		            <input type = "text" />
		            <input type = "submit" />
	          	</form>
			);
	}
});

ReactDOM.render( < Search / > ,document.getElementById('content'));