import React from 'react';
// import ReactDOM from 'react-dom';
import Card from './card';
import Form from './form'


const comments = [
    {author: 'TALTA',
        text: 'Because I said so'
    },
    {
        author: "Ric Mentor",
        text: "Go T Go"
    }
];

ca {
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
    onAddInputChanged(){
        ///when the  input is changed



    }
    render() {
        const cards = this.state.cards.map((card, index) =>
            <Card key={index}  comments={comments} text={card.text} />
        );
        return (
            <div className="list">
                <h3>{this.props.title}</h3>
                {cards}
                <Form type="card" />
            </div>
        );
    }
}




List.propTypes = {
	listTitle: React.PropTypes.string,
	cards: React.PropTypes.array,
};

 
 List.defaultProps = {
     title: 'this is the default List Title'
 };