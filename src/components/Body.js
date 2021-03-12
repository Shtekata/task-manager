import { Component } from 'react';
import BookList from './BookList';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import { testService } from '../services/testService';
import Message from './Message';

class Body extends Component{
    constructor(props) { super(); this.state = { clicks: 0, message: '' } }
    clickHandler = () => this.setState(x => ({ clicks: x.clicks + 1 }))
    
    componentDidMount() {
        testService.testMessage.then(x => this.setState({ message: x.message }));
    }

    render() {
        return (
            <main>
                <Message message={this.state.message}/>
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