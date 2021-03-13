import { Component } from 'react';
import BookList from './BookList';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import { testService } from '../services/testService';
import Message from './Message';
import UserAndPass from './UsernameAndPassword';

class Body extends Component{
    constructor(props) { super(); this.state = { clicks: 0, message: '' } }
    clickHandler = () => this.setState(x => ({ clicks: x.clicks + 1 }))
    
    componentDidMount() {
        testService.testMessage.then(x => this.setState({ message: x.message }));
        // testService.createEntity({
        //     title: 'Pesho',
        //     description: 'Gosho',
        //     solution: 'Gesho',
        //     isPublic: 'on'
        // });
        // testService.register({ username: 'Shtekata', email: 'gesheval@gmail.com', password: '7u87u8', rePassword: '7u87u8' });
        testService.login({ username: 'Shtekata', password: '7u87u8' });
    }

    render() {
        return (
            <main>
                <Message message={this.state.message} />
                <UserAndPass />
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