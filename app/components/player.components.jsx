var React = require('react');
var ClassNames = require('classnames');

var Player = React.createClass({

	

	render : function(){
		var controlButtonStyle = {
			//background:transparent,
			width: 50,
  			height: 50,
  			borderRadius: 100
		};
		var playPauseClass = ClassNames({
      		'fa fa-play': this.props.playStatus === 'PLAYING' ? false : true, //the getStatusText method in the API returns 
      		'fa fa-pause': this.props.playStatus === 'PLAYING' ? true : false
    	});

		return(
				<div className="player text-center">
			      {/*to go to prev track*/}
			      <div className="player-backward">
			        <button onClick={this.props.backward} style={controlButtonStyle}><i className="fa fa-backward"></i></button>
			      </div>

			      <div className="player-main">
			        <button onClick={this.props.stop} style={controlButtonStyle}><i className="fa fa-stop"></i></button>
			        <button onClick={this.props.togglePlay} style={controlButtonStyle}><i className={playPauseClass}></i></button>
		            <button onClick={this.props.random} style={controlButtonStyle}><i className="fa fa-random"></i></button>

			      </div>
			  		{/*to go to next track*/}
			      <div className="player-forward">
			        <button onClick={this.props.forward} style={controlButtonStyle}><i className="fa fa-forward"></i></button>
			      </div>

			    </div>
			);
	}
});

module.exports = Player;