var React = require('react');
var ReactDOM = require('react-dom');
import Card from './card';

// export default class List extends React.Component{

// 	constructor(props){
// 		super(props);
// 		this.state={
// 			cards: [
// 				{text:'first cards text'},
// 				{text:'second cards text'},
// 				{text: 'third cards text'}
// 			]
// 		}
// 	}
	
// 	render(){
// 		const cards = this.state.cards.map((card, index)=>
// 			<Card key={index} {...card}/>
// 		);
// 		return (
// 			<div className='list'>
// 				<h3>{this.props.listTitle}</h3>
// 				{cards}
// 			</div>
// 		);
// 	}
// };





export default class List extends React.Component {
    constructor(props) {
         super(props);
         this.state = {
             cards: [{
                 text: 'Example card 1'
             }, {
                 text: 'Example card 2'
             }, {
                 text: 'Example card 3'
             }]
         }
     }
 
     render() {
         const cards = this.state.cards.map((card, index) =>
             <Card key={index} {...card} />
         );
         return (
             <div className="list">
                 <h3>{this.props.title}</h3>
                 {cards}
            </div>
         );
     }
}


List.propTypes = {
	listTitle: React.PropTypes.string,
	cards: React.PropTypes.array
};

 
 List.defaultProps = {
     title: 'this is the default List Title'
 };