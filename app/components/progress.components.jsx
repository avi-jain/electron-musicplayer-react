var React = require('react');

var ProgBar = React.createClass({
	render : function(){
		return(
				<div className="progbar">
	        		{/* Elapsed time */}
	        		<span className="player-time-elapsed">{this.props.elapsed}</span>
	        		{/* Progress Bar */}
	        		<progress
	           		value={this.props.position}
	           		max="100"></progress>
	         		{/* Total time */}
	         		<span className="player-time-total">{this.props.total}</span>
      			</div>
			);
	}

});





module.exports = ProgBar;