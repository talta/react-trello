var React = require('react');
var ReactDOM = require('react-dom');






export default function Card(props){
	console.log(props);
	///define the return of the comments here or else have a comments component
	return (
		<div>
			<div className = "card">{props.text}</div>
			<div className ="card-comments">{props.comments[0].text}</div>
		</div>
	);
};




// Card.propTypes = {
// 	text: React.PropTypes.string
// };

// Card.defaultProps = {
//     text: 'default text'
//  };