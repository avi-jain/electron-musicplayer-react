var React = require('react');

var ProgBar = React.createClass({
	render : function(){
		var progbarStyle = {
			width: 500,
  			height: 5,
  			marginTop: 10
		}
		return(
				<div className="progbar text-center">
	        		{/* Elapsed time */}
	        		<span className="player-time-elapsed">{this.props.elapsed}</span>
	        		{/* Progress Bar */}
	        		<progress
	           		value={this.props.position}
	           		max="1" style={progbarStyle}></progress>
	         		{/* Total time */}
	         		<span className="player-time-total">{this.props.total}</span>
      			</div>
			);
	}

});





module.exports = ProgBar;