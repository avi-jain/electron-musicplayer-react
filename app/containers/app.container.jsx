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
      	playStatus: Sound.status.PLAYING,
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
  	handleSongPlaying(audio){                                           //Can take in audio instance
      this.setState({ elapsed: this.formatMilliseconds(audio.position),
                      total: this.formatMilliseconds(audio.duration),
                      position: audio.position / audio.duration });
  	}, 
  	handleSongFinishedPlaying () {
    	this.forward();
   	},
    formatMilliseconds(milliseconds) {
      // Format hours
      var hours = Math.floor(milliseconds / 3600000);
      milliseconds = milliseconds % 3600000;

      // Format minutes
      var minutes = Math.floor(milliseconds / 60000);
      milliseconds = milliseconds % 60000;

      // Format seconds
      var seconds = Math.floor(milliseconds / 1000);
      milliseconds = Math.floor(milliseconds % 1000);

      // Return as string
      return (minutes < 10 ? '0' : '') + minutes + ':' +
      (seconds < 10 ? '0' : '') + seconds;
    },
	// componentDidMount lifecycle method. Called once a component is loaded
    /*componentDidMount: function() {
        this.randomTrack();
    },
    
    randomTrack : function(){
    	let _this = this; // WHY?
    	Axios.get('https://api.soundcloud.com/playlists/242598684?client_id=${this.client_id}')
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
				<Details title={'Photograph - Ed Sheeran'}/>
				<Sound
				    url="http://stuffdown.com/2015/Best%20of%20August%202015%20-%20(www.SongsLover.mobi)/19.%20Ed%20Sheeran%20-%20Photograph%20-%20(www.SongsLover.mobi).mp3"
				    playStatus={this.state.playStatus}
				    playFromPosition={100 /* in milliseconds */}
				    onPlaying={this.handleSongPlaying}
				    onFinishedPlaying={this.handleSongFinishedPlaying} />
				
        <Player togglePlay={this.togglePlay}
                stop={this.stop}
                playStatus={this.state.playStatus}
                forward={this.forward}
                backward={this.backward}/>
				
        <ProgBar elapsed={this.state.elapsed}
          				total={this.state.total}
          				position={this.state.position} />
				<Footer/>
			</div>
			);
	}
});

module.exports = AppContainer;
