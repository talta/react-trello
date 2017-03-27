import React from 'react';
// import ReactDOM from 'react-dom';
import List from './list';
import Form from './form';




export default class Board extends React.Component{
	constructor(props){
		super(props);

		this.state= {
			lists:[{
				title:'the first list title'
			},
			{
				title: 'this is the second list title'
			}]
		};
	}

    render() {
        const lists = this.state.lists.map((list, index) =>
            <List key={index} {...list} />
        );

        
//// onAdd is a prop, addList is the function
        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}

                    <Form type="list" onAdd={this.addList} />
                </div>
              </div>
                     );
    }
}
 

Board.propTypes = {
	boardTitle:React.PropTypes.string
};

Board.defaultProps = {
    title: 'Board'
};
