import { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Aside from '../../Shared/Aside';
import About from '../../Aside-nav-comp/About';
import ContactUs from '../../Aside-nav-comp/ContactUs';
import KanbanBoard from '../../Kanban-board/Kanban-board';
import Auth from '../Auth';
import Music from '../../Aside-nav-comp/Music';
import AddTask from '../../Tasks/Task/AddTask/AddTask';
import EditTask from '../../Tasks/Task/EditTask/EditTask';
import DetailsTask from '../../Tasks/Task/DetailsTask/DetailsTask';
import OldTasksList from '../../Tasks/OldTasksList';
import { Context } from '../Context';
import GuardedRoute from '../../Hooks/GuardedRoot/GuardedRoot';

class Body extends Component{
    constructor(props) {
        super(props);
        this.state = {
            labels: [['home', 'Home'], ['tasks/add', 'Add Task'], ['old-tasks', 'Old Tasks'],
            ['about', 'About'], ['musical', 'Musical'], ['contact-us', 'Contact Us']]
        }
    }
    
    onAsideItemClick(id) {
        const [state, dispatch] = this.context;
        if ((id === 'Add Task' || id === 'Old Tasks') && !state.user) {
            dispatch({ type: 'info', payload: 'You have to log in first!' });
        };
    }

    render() {
        return (
            <div className='container'>
                <Aside labels={this.state.labels} onAsideItemClick={this.onAsideItemClick.bind(this)}/>
                <main className='main'>
                    <Switch>
                        <Route path='/' exact> <KanbanBoard /> </Route>
                        <Route path='/home'> <KanbanBoard /> </Route>
                        <Route path='/auth' component={Auth} />
                        <Route path='/tasks/details/:_id' component={DetailsTask} />
                        <Route path='/about' component={About} />
                        <Route path='/musical' component={Music} />
                        <Route path='/contact-us' component={ContactUs} />
                        <Route path='/aside/:id' component={OldTasksList} />
                        <GuardedRoute path='/old-tasks' component={OldTasksList} auth={!!this.context[0].user} />
                        <GuardedRoute path='/tasks/add' component={AddTask} auth={!!this.context[0].user} />
                        <GuardedRoute path='/tasks/edit/:_id' component={EditTask} auth={!!this.context[0].user} />
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
Body.contextType = Context;
export default withRouter(Body);