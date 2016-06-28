var React = require('react');

var Details = React.createClass({
	render : function(){
		return(
				<div className = "details">
					<h3>{this.props.title}</h3>
				</div>
			);
	}
});

module.exports = Details;