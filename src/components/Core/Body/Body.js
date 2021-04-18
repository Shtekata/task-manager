import {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Aside from '../../Shared/Aside'
import About from '../../Aside-nav-comp/About'
import ContactUs from '../../Aside-nav-comp/ContactUs'
import KanbanBoard from '../../Kanban-board/Kanban-board'
import Auth from '../Auth'
import Music from '../../Aside-nav-comp/Music'
import AddTask from '../../Tasks/Task/AddTask/AddTask'
import EditTask from '../../Tasks/Task/EditTask/EditTask'
import DetailsTask from '../../Tasks/Task/DetailsTask/DetailsTask'
import OldTasksList from '../../Tasks/OldTasksList'
import {Context} from '../Context'
import GuardedRoute from '../../Hocs/GuardedRoot'
import Error404 from '../../Errors/Error404.js'
import {css} from '@emotion/react'

class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
      labels: [
        ['home', 'Home'],
        ['tasks/add', 'Add Task'],
        ['old-tasks', 'Old Tasks'],
        ['about', 'About'],
        ['musical', 'Relax'],
        ['contact-us', 'Contact Us'],
        ['ala-bala', '404'],
      ],
    }
  }

  onAsideItemClick(id) {
    const [state, dispatch] = this.context
    if ((id === 'Add Task' || id === 'Old Tasks') && !state.user) {
      dispatch({type: 'info', payload: 'You have to log in first!'})
    }
  }

  render() {
    return (
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          min-height: 80.17vh;
        `}>
        <Aside labels={this.state.labels} onAsideItemClick={this.onAsideItemClick.bind(this)} />
        <main
          css={css`
            flex-grow: 1;
          `}>
          <Switch>
            <Route path='/' exact component={KanbanBoard} />
            <Route path='/home' component={KanbanBoard} />
            <Route path='/auth' component={Auth} />
            <Route path='/tasks/details/:_id' component={DetailsTask} />
            <Route path='/about' component={About} />
            <Route path='/musical' component={Music} />
            <Route path='/contact-us' component={ContactUs} />
            <GuardedRoute path='/old-tasks' component={OldTasksList} auth={!!this.context[0].user} />
            <GuardedRoute path='/tasks/add' component={AddTask} auth={!!this.context[0].user} />
            <GuardedRoute path='/tasks/edit/:_id' component={EditTask} auth={!!this.context[0].user} />
            <Route component={Error404} />
          </Switch>
        </main>
      </div>
    )
  }
}
Body.contextType = Context
export default withRouter(Body)
