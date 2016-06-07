var React = require('react');

var Results = React.createClass({
	render: function(){

		return(

			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
						<div className="panel-body">
							<ul className="list-group">
							  <li className="list-group-item">
							
								<h3>
								  	<span><em>Aliens Invade Paris</em></span>
									<span className="btn-group pull-right" >
										<button className="btn btn-default ">View Article</button>
										<button className="btn btn-primary">Save</button>
									</span> 
								</h3>
								<p>Date Published: 03/15/16</p>
								
							  </li>

							  <li className="list-group-item">
							
								<h3>
								  	<span><em>Obama Gives Commencement Speech</em></span>
									<span className="btn-group pull-right" >
										<button className="btn btn-default ">View Article</button>
										<button className="btn btn-primary">Save</button>
									</span> 
								</h3>
								<p>Date Published: 03/15/16</p>

							  </li>

							</ul>					
						</div>
					</div>

				</div>
			</div>

		)
	}
})

module.exports = Results;