var React = require('react');

var Footer = React.createClass({
	render : function(){
		return(
				<div className="footer">
					<p className="text-center">Made with love <img src="public/img/soundcloud.png" className="soundcloud"/></p>
				</div>
			);
	}
});

module.exports = Footer;