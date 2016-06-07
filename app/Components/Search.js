var React = require('react');
var Query = require('./Search/Query.js')
var Results = require('./Search/Results.js')

var Search = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-lg-12">
					<Query/>
				</div>
			
				<div className="col-lg-12">
					<Results/>
				</div>
			</div>
		)
	}
})

module.exports = Search;