import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import Aside from '../../Shared/Aside';
import TaskList from '../../Tasks/OldTasksList';
import About from '../../Aside-nav-comp/About';
import ContactUs from '../../Aside-nav-comp/ContactUs';
import KanbanBoard from '../../Kanban-board/Kanban-board';
import Auth from '../Auth';
import Music from '../../Aside-nav-comp/Music';
import AddTask from '../../Tasks/Task/AddTask/AddTask';
import EditTask from '../../Tasks/Task/EditTask/EditTask';
import DetailsTask from '../../Tasks/Task/DetailsTask/DetailsTask';

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTask: null,
            labels: [['home', 'Home'], ['tasks/add', 'Add Task'], ['old-tasks', 'Old Tasks'],
                ['about', 'About'], ['musical', 'Musical'], ['contact-us', 'Contact Us']]
        }
    }
    
    componentDidMount() {
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
                        <Route path='/tasks/add' component={AddTask} />
                        <Route path='/tasks/edit/:_id' component={EditTask} />
                        <Route path='/tasks/details/:_id' component={DetailsTask} />
                        <Route path='/old-tasks' component={TaskList} />
                        <Route path='/about' component={About} />
                        <Route path='/musical' component={Music} />
                        <Route path='/contact-us' component={ContactUs} />
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