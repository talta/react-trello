var React = require('react');
var ReactDOM = require('react-dom');

export default function Card(props){
	return (
			<div className = "card">{props.text}</div>
		);
};


Card.propTypes = {
	text: React.PropTypes.string
};
Card.defaultProps = {
    text: ''
 };