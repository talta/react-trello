var React = require('react');
import List from './list';


export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="card form">
                <input type="text" />
                <button>Add</button>
                <button type="button" onClick={() => this.setEditing(false)}>
                    Cancel
                </button>
            </form>
        );
    }
}
