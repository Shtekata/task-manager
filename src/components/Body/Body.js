import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import { testService } from '../../services/testService';
import Aside from '../Aside';
import TaskList from '../TaskList';
import About from '../About';
import ContactUs from '../ContactUs';

class Body extends Component{
    constructor(props) { super(props); this.state = {  tasks: [], selectedTask: null } }
    
    componentDidMount() {
        testService.testMessage.then(x => console.log(x));
        testService.getEntities().then(x => {
            localStorage.setItem('token', x.token);
            this.setState(() => ({ tasks: x.enitities }));
        });
        
        // testService.register({ username: 'ShtekataEkataGek', email: 'gesheval-eshaval-gek@gmail.com', password: '7u87u8', rePassword: '7u87u8' });
        // testService.login({ username: 'ShtekataEkataGek', password: '7u87u8' });
        // testService.logout();

        // testService.createEntity({
        //     title: 'Pesho-Mesho-Kesho',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea laudantium iusto sunt, non vero veniam quia repudiandae, eaque quis, dignissimos aperiam. Laudantium odit exercitationem aut in iure adipisci, ratione corrupti consequatur magnam nemo, enim repellendus, aspernatur molestiae architecto eligendi non. Eos autem quis qui hic mollitia unde expedita quaerat amet.',
        //     solution: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, est porro. Cumque, dignissimos veniam quo corporis obcaecati quaerat non rerum molestiae quasi natus quos tempore perferendis voluptas amet, voluptatibus a eaque ad nobis. Soluta, a dolorem. Magni asperiores consequuntur nisi modi, reiciendis velit, vero, quos dignissimos impedit mollitia quo omnis!',
        //     isPublic: 'on'
        // }).then(x => {
        //     if (x.hasOwnProperty('err')) {
        //         const err = new Error();
        //         Object.assign(err, x.err);
        //         // throw err;
        //         console.log(err);
        //     }
        // })
        // testService.getEntity({ _id: '604e7e9ef743eb33505b2410' });
        // testService.editEntity({ _id: '604e7e9ef743eb33505b2410', description: 'AAAAAAAAAAAAA', solution: 'BBBBBBBBBBBBBB' });
        // testService.deleteEntity({ _id: '604e7e9ef743eb33505b2410' });
        
        console.log('Token: ' + localStorage.getItem('token'));
    }

    onAsideItemClickApp(id) {
        this.setState(() => ({ selectedTask: id }));
    };

    getPosts() {
        if (!this.state.selectedTask) return this.state.tasks;
        return this.state.tasks.find(x => x.id == this.state.selectedTask) != undefined
            ? [this.state.tasks.find(x => x.id == this.state.selectedTask)] : this.state.tasks;
    };

    render() {
        return (
            <div className='container'>
                <Aside onAsideItemClick={this.onAsideItemClickApp.bind(this)} />
                <main className='main'>
                    <Switch>
                        <Route path='/' exact>
                            <TaskList tasks={this.state.tasks} />
                        </Route>
                        <Route path='/about' component={About} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route path='/contact-us-custom' render={(props) => <h1>Contact Us Custom Page</h1>} />
                        <Route path='/aside/:id'><TaskList tasks={this.getPosts()} /></Route>
                        <Route render={() => <h1>Error Page =&gt; :)</h1>} />
                    </Switch>
                </main>
                <style jsx>{`
                    .container{
                      display: flex;
                      justify-content: space-around;
                    }
                    .main{
                        flex-basis: 83%;
                        height: auto;
                    }
                `}</style>
            </div>
        );
    }
}

export default Body;