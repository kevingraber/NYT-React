// app.js plays the central role of handling rouing and is the "starting point" in our code.

// Grab the dependencies
var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios')

function runSearch(term){
	return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f00d8dbd623a99f7d310810bf38cff90:9:74629258&q=" + term)
		.then(function(results){
			console.log(results)
			for (var i = 0; i < results.data.response.docs.length; i++) {
				console.log(results.data.response.docs[i].headline.main)
			}
	})
};

var Main = React.createClass({
	render: function(){
		return (

			<div className="main-container">
				<div className="jumbotron text-center">
					<h1>New York Times Search!</h1>
				</div>
				<div className="container">
					<Search />
				</div>
			</div>

		)
	}
})

var Search = React.createClass({
	getInitialState: function() {
		return {term: ''};
	},
	handleTermChange: function(e) {
		this.setState({term: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var term = this.state.term.trim()
		if (!term) {
	    	return;
	    }
		runSearch(term);
		this.setState({term: ''})
	},
	render: function(){
		return(

			<div className="col-sm-12">
		        <form onSubmit={this.handleSubmit}>
		          	<div className="form-group col-sm-7">
		            	<input type="text" value={this.state.term} onChange={this.handleTermChange} placeholder="Enter search terms.." className="form-control" />
		          	</div>
		          	<div className="form-group col-sm-5">
		            	<button type="submit" className="btn btn-block btn-primary">Search NYT</button>
		          	</div>
		        </form>
		    </div>

		)
	}
})

// var Results = React.createClass({
// 	render: function(){
// 		return(



// 		)
// 	}
// })

ReactDOM.render(<Main />, document.getElementById('app'))
// ReactDOM.render(<Search />, document.getElementById('app'))

// console.log('loaded!')

// var HelloMessage = React.createClass({
//     render: function() {
// 		return <h1>Hello {this.props.name}</h1>;
// 	}
// });

// ReactDOM.render(<HelloMessage name="John" />, document.getElementById('app'));