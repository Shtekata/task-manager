import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import { testService } from '../../services/testService';
import * as taskService from '../../services/taskService';
import Aside from '../Aside';
import TaskList from '../TaskList';
import About from '../About';
import ContactUs from '../ContactUs';
import KanbanBoard from '../Kanban-board/Kanban-board';
import Auth from '../Auth';
import Music from '../Music';

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTask: null,
            labels: [['home', 'Home'], ['about', 'About'], ['articles', 'Articles'],
            ['musical', 'Musical'], ['contact-us', 'Contact Us']]
        }
    }
    
    componentDidMount() {
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
    }

    onAsideItemClickApp(id) {
        if (!id) this.setState(() => ({ selectedTask: null }));
        this.setState({ selectedTask: id });
    };

    render() {
        return (
            <div className='container'>
                <Aside onAsideItemClick={this.onAsideItemClickApp.bind(this)} labels={this.state.labels}/>
                <main className='main'>
                    <Switch>
                        <Route path='/' exact> <KanbanBoard /> </Route>
                        <Route path='/home'> <KanbanBoard /> </Route>
                        <Route path='/auth' component={Auth} />
                        <Route path='/about' component={About} />
                        <Route path='/musical' component={Music} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route path='/articles' component={TaskList}/>
                        <Route path='/aside/:id' component={TaskList} />
                        <Route render={(props) => <h1 {...props}>Error Page =&gt; :)</h1>} />
                    </Switch>
                </main>
                <style jsx>{`
                    .container{
                      display: flex;
                      justify-content: space-between;
                      min-height: 80.17vh;
                    }
                    .main{
                        flex-grow: 1;
                    }
                `}</style>
            </div>
        );
    }
}

export default Body;