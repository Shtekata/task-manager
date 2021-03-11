import { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super()
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
        this.setState((x) => ({ value: e.target.value }))
    }
    render() {
        return (
            <div>
                <label htmlFor="name">Name </label>
                <input type="text" name='name' value={this.state.value} onChange={this.handleChange} />
                <div>{this.state.value||'No name'}</div>
            </div>
        )
    }
}

export default Input;