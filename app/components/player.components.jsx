var React = require('react');
var ClassNames = require('classnames');

var Player = React.createClass({

	

	render : function(){
		var playPauseClass = ClassNames({
      		'fa fa-play': this.props.playStatus === 'PLAYING' ? false : true,
      		'fa fa-pause': this.props.playStatus === 'PLAYING' ? true : false
    	});

		return(
				<div className="player">
			      
			      <div className="player-backward">
			        <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
			      </div>

			      <div className="player-main">
			        <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
          			<button onClick={this.props.stop}><i className="fa fa-stop"></i></button>
		            <button onClick={this.props.random}><i className="fa fa-random"></i></button>

			      </div>

			      <div className="player-forward">
			        <button onClick={this.props.forward}><i className="fa fa-forward"></i></button>
			      </div>

			    </div>
			);
	}
});

module.exports = Player;