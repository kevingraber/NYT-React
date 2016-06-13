var React = require('react');
var axios = require('axios')

var Query = React.createClass({
	getInitialState: function() {
		return {term: '', startyear: '', endyear: ''};
	},
	handleTermChange: function(e) {
		this.setState({term: e.target.value});
	},
	handleStartYearChange: function(e){
		this.setState({startyear: e.target.value})
	},
	handleEndYearChange: function(e){
		this.setState({endyear: e.target.value})
	},
	handleSubmit: function(e){
		e.preventDefault();
		var term = this.state.term.trim()
		var startyear = this.state.startyear.trim()
		var endyear = this.state.endyear.trim()
		if (!term || !startyear || !endyear) {
	    	return;
	    }
		// runSearch(term);
		console.log('this.state', this.state)
		this.props.callbackParent(term, startyear, endyear)
		this.setState({term: '', startyear: '', endyear: ''})
	},
	render: function(){
		return(

			<div className="col-sm-12">
		        <form onSubmit={this.handleSubmit}>


		          	<div className="form-group col-sm-7">
		            	<input type="text" value={this.state.term} onChange={this.handleTermChange} placeholder="Enter search terms.." className="form-control" />
		          	</div>

		          	<div className="form-group col-sm-7">
		            	<input type="text" value={this.state.startyear} onChange={this.handleStartYearChange} placeholder="Enter start year.." className="form-control" />
		          	</div>

		          	<div className="form-group col-sm-7">
		            	<input type="text" value={this.state.endyear} onChange={this.handleEndYearChange} placeholder="Enter end year.." className="form-control" />
		          	</div>

		          	<div className="form-group col-sm-5">
		            	<button type="submit" className="btn btn-block btn-primary">Search NYT</button>
		          	</div>
		        </form>
		    </div>

		)
	}
});

function runSearch(term){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258&q=" + term)
		.then(function(results){
			console.log(results)
			for (var i = 0; i < results.data.response.docs.length; i++) {
				console.log(results.data.response.docs[i].headline.main)
			}
	})
};

module.exports = Query;