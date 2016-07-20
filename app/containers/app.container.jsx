//client_id: 
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
        next_track: {stream_url: '', title: '', artwork_url: ''},
        prev_track: {stream_url: '', title: '', artwork_url: ''},
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
      this.setState({track: this.state.next_track});
  	},
  	backward(){
      this.setState({track: this.state.prev_track});
  	},
    randomize(){

    },
    prepareUrl(url){                                                    //uhmm...changing the quotes changes the code?
      return `${url}?client_id=`                                        //PUT ID here
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
    componentDidMount: function() {
        this.randomTrack();
    },
    
    randomTrack : function(){
    	let _this = this; // WHY?
      //make sure it ain't calling the local filesystem
    	Axios.get('https://api.soundcloud.com/playlists/242598684?client_id=') //PUT ID here
  		.then(function (response) {
      //SOUNDCLOUD API - Accessing Sets/Playlists
      //To get a list of tracks in a set, send a GET request to the /playlists endpoint with the set id. Will respond with array 'tracks'
      //Axios - Use .data to access response
      const playlistLength = response.data.tracks.length; //Store playlist length
    	console.log(playlistLength);
      const randomNumber = Math.floor((Math.random() * playlistLength) + 1); //For random track number
      _this.setState({track: response.data.tracks[randomNumber]});
      _this.setState({next_track:response.data.tracks[randomNumber + 1]});
      _this.setState({prev_track:response.data.tracks[randomNumber - 1]}); //Hmm,react is smart.Sets state calls are done in batches.
  		})                                                                   //So, pressing next track after prev track takes us to next track
  		.catch(function (error) {                                            // of the initial track. Will have to fix this. And ArrayOutOfBounds shit
    	console.log(error);
  		});

    },

	render : function(){
		return(
			<div className="music-player">
				<Details title={this.state.track.title}/>
				<Sound
				    url={this.prepareUrl(this.state.track.stream_url)}
				    playStatus={this.state.playStatus}
				    playFromPosition={100 /* in milliseconds */}
				    onPlaying={this.handleSongPlaying}
				    onFinishedPlaying={this.handleSongFinishedPlaying} />
				
        <Player togglePlay={this.togglePlay}
                stop={this.stop}
                playStatus={this.state.playStatus}
                forward={this.forward}
                backward={this.backward}
                random={this.randomize}/>
				
        <ProgBar elapsed={this.state.elapsed}
          				total={this.state.total}
          				position={this.state.position} />
				<Footer/>
			</div>
			);
	}
});

module.exports = AppContainer;
