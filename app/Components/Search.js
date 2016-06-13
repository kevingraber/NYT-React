var React = require('react');
var Query = require('./Search/Query.js')
var Results = require('./Search/Results.js')
var axios = require('axios')

var Search = React.createClass({
	getInitialState: function() {
        return {term: '', startyear: '', endyear: '', articles: []};
    },
    getSearchTerms: function(newTerm, newStartYear, newEndYear){
    	this.setState({term: newTerm, startyear: newStartYear, endyear: newEndYear})
    },
    componentDidUpdate: function(prevProps, prevState){
    	console.log("I updated")
    	console.log(this.state.term)
    	console.log(prevState)

    	if (this.state.term != prevState.term && this.state.startyear != prevState.startyear && this.state.endyear != prevState.endyear) {

    		console.log("this.state before call", this.state)
    		console.log("prevState", prevState)

	    	var term = this.state.term;
	    	var startyear = this.state.startyear;
	    	var endyear = this.state.endyear;
			axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=6bf10a490ee83a145d4ecc123e091d3a:17:74629258&q=" + term + "&begin_date=" + startyear + "0101&end_date=" + endyear + "1231")
				.then(function(results){
					// console.log(results)
					// for (var i = 0; i < results.data.response.docs.length; i++) {
					// 	console.log(results.data.response.docs[i].headline.main)
					// }
					this.setState({
						articles: results.data.response.docs
					})
					console.log(this)
					console.log(this.state)
			}.bind(this))

		}
    },
	render: function(){
		console.log(this);
		return(
			<div className="row">
				<div className="col-lg-12">
					<Query callbackParent={this.getSearchTerms}/>
				</div>
			
				<div className="col-lg-12">
					<Results info={this.state.articles}/>
				</div>
			</div>
		)
	}
})

module.exports = Search;