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
        
        // testService.register({ username: 'ShtekataEkataGek', email: 'gesheval-eshaval-gek@gmail.com', password: '7u87u8', rePassword: '7u87u8' });
        // testService.login({ username: 'ShtekataEkataGek', password: '7u87u8' });
        // testService.logout();

        testService.createEntity({
            title: 'Pesho-Mesho-Desho-Fresho',
            description: 'GoGoGoGoGo',
            solution: 'GeGeGeGeGe',
            isPublic: 'on'
        }).then(x => {
            if (x.hasOwnProperty('err')) {
                const err = new Error();
                Object.assign(err, x.err);
                // throw err;
                console.log(err);
            }
        })
        // testService.editEntity({ _id: '604e7c75900b4c2958d7badf', description: 'AAAAAAAAAAAAA', solution: 'BBBBBBBBBBBBBB' });
        // testService.deleteEntity({ _id: '604e7c75900b4c2958d7badf' });
        
        console.log('Token: ' + localStorage.getItem('token'));
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