import { Component } from 'react';
import BookList from './BookList';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';

class Body extends Component{
    constructor(props) { super(); this.state = { clicks: 0 } }
    clickHandler = () => this.setState(x => ({ clicks: x.clicks + 1 }))
    render() {
        return (
            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sit omnis provident optio expedita error voluptas qui id illum nesciunt.</p>
                <Counter />
                <br/>
                <Input />
                <Counter />
                <br/>
                <Button clickHandler={() => this.clickHandler()} clicks={this.state.clicks}/>
                <BookList books={this.props.booksData} />
            </main>
        )
    }
}

export default Body;