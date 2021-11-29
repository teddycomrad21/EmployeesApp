import { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        e.preventDefault();
        const term = e.target.value;
        this.setState({
            term
        })
        this.props.onUpdateSearch(term);
    }    

    render() {
        const {term} = this.state;
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={term}
                onChange={this.onUpdateSearch}
            />
        );
    }
}
