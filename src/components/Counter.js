import { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super();
        this.state = { count: 0, collectionName: 'My Books' };
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount = () => this.setState(x => ({ count: x.count + 1, collectionName: 'My Books +' }))

    decrementCount() {
        // this.setState({ count: this.state.count - 1 })
        this.setState(x => ({ count: x.count - 1, collectionName: 'My Books -' }))
    }

    // resetCount = () => this.setState({ count: 0 })
    resetCount = (x) => {
        console.log(x)
        this.setState({ count: 0 })
        setTimeout(() => console.log(x), 1000)
    }

    render() {
        return (
            <div className="counter">
                <h3>{this.state.collectionName} Counter</h3>
                <span>{this.state.count} </span>
                <button onClick={(e)=>this.setState({count:this.state.count+1})}>+</button>
                <button onClick={()=>this.incrementCount()}>+</button>
                <button onClick={this.decrementCount.bind(this)}>-</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

export default Counter;