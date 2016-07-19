var React = require('react');

var Footer = React.createClass({
	render : function(){
		return(
				<div className="footer">
					<p className="text-center">Made with ♥ by <a href="https://github.com/avi-jain">Avi</a> <img src="public/img/soundcloud-white.png" className="soundcloudlogo"/></p>
				</div>
			);
	}
});

module.exports = Footer;