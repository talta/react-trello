require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

// var Board = require('./components/board');
import Board from './components/board';

document.addEventListener('DOMContentLoaded', function() {
	console.log('document is ready for listening');
    ReactDOM.render(
    	<Board 
    		boardTitle= 'taltallcs board'
    		lists= {[
    			"first list", "second list", "third list"
    		]}
    	/>, 
    	document.getElementById('app'));
});