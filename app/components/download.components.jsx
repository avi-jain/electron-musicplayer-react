var React = require('react');

var Download = React.createClass({
	render : function(){
		return(
				<div className = "download text-center">
					<a className="downloadbtn btn btn-default" href={this.props.mp3link} download>Download</a>
				</div>
			);
	}
});

module.exports = Download;