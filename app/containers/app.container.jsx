var React = require('react');
//Sound component
var Sound = require('react-sound');
//Axios for Ajax
var Axios = require('axios');

var Footer  = require('../components/footer.components.jsx');
var Details = require('../components/details.components.jsx');
var Player  = require('../components/player.components.jsx');
var ProgBar = require('../components/progress.components.jsx');

var AppContainer = React.createClass({
	
	getInitialState : function(){
      return{ 
      	track: {stream_url: '', title: '', artwork_url: ''},
      	playStatus: Sound.status.STOPPED,
      	elapsed: '00:00',
        total: '00:00',
        position: 0
    	}; 
    },

    togglePlay(){
    // Check current playing state
	    if(this.state.playStatus === Sound.status.PLAYING){
	      // Pause if playing
	      this.setState({playStatus: Sound.status.PAUSED})
	    } else {
	      // Resume if paused
	      this.setState({playStatus: Sound.status.PLAYING})
	    }
  	},

 	  stop(){
	    // Stop sound
	   this.setState({playStatus: Sound.status.STOPPED});
  	},
    forward(){

  	},
  	backward(){

  	},
  	handleSongPlaying(){

  	},
  	handleSongFinishedPlaying () {
    	this.forward();
   	},
	// componentDidMount lifecycle method. Called once a component is loaded
    /*componentDidMount: function() {
        this.randomTrack();
    },
    
    randomTrack : function(){
    	let _this = this; // WHY?
    	Axios.get('https://api.soundcloud.com/playlists/')
  		.then(function (response) {
    	console.log(response.data);
  		})
  		.catch(function (error) {
    	console.log(error);
  		});

    },
*/
	render : function(){
		return(
			<div className="music-player">
				<Details title={'Track title'}/>
				<Sound
				    url="http://stuffdown.com/2015/Best%20of%20August%202015%20-%20(www.SongsLover.mobi)/19.%20Ed%20Sheeran%20-%20Photograph%20-%20(www.SongsLover.mobi).mp3"
				    playStatus={Sound.status.PLAYING}
				    playFromPosition={100 /* in milliseconds */}
				    onPlaying={this.handleSongPlaying}
				    onFinishedPlaying={this.handleSongFinishedPlaying} />
				<Player />
				<ProgBar elapsed={this.state.elapsed}
          				total={this.state.total}
          				position={this.state.position} />
				<Footer/>
			</div>
			);
	}
});

module.exports = AppContainer;
