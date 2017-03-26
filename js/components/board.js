var React = require('react');
var ReactDOM = require('react-dom');
import List from './list';


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

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}
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
