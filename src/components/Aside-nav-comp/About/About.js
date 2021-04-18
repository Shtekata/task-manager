import styled from '@emotion/styled'

const H1 = styled.h1`
  text-align: center;
  color: #234465;
  text-decoration: underline;
  margin: 2rem 1rem 2rem 1rem;
  font-size: 2.7rem;
`
const H2 = styled.h2`
  margin: 2rem 1rem 2rem 1rem;
  font-size: 1.9rem;
`
const H3 = styled.h3`
  margin: 2rem 1rem 2rem 1rem;
  font-size: 1.5rem;
`
const H4 = styled.h4`
  margin: 2rem 1rem 2rem 1rem;
  font-size: 1.3rem;
`
const P = styled.p`
  text-align: left;
  margin: 1rem 1rem 1rem 10rem;
  font-size: 1.1rem;
`

const About = () => (
  <div className='about'>
    <H1>This is Kanban Management System</H1>
    <H2>Here are some details about working with the application and its functionalities:</H2>
    <H3>Available Actions Guest Users:</H3>
    <H4>In the project, you can:</H4>
    <P>- register, but you have some validation properties.</P>
    <P>- login, if you already registered.</P>
    <P>- view all public tasks.</P>
    <H3>Available Actions Logged In Users</H3>
    <H4>In the project, you can:</H4>
    <P>- logout.</P>
    <P>- view all tasks.</P>
    <P>- create a new task.</P>
    <P>- move tasks only one category left or right, with keep pressed left mouse button.</P>
    <P>- move to a done category only if the task has a solution.</P>
    <P>- edit task, when double click on the task or on the corresponding button.</P>
    <P>- view details of the task, when click on the details task button.</P>
    <P>- delete task, when click on the delete task button.</P>
    <P>- navigate to 'Old Tasks' view.</P>
    <P>- delete tasks.</P>
    <H3>Additional Clarifications:</H3>
    <P>When you click on the email in the navigation bar, you go to the profile page.</P>
    <P>There you can add additional information about you.</P>
    <P>Of course there is also a page for wrong paths.</P>
    <P>Deleted tasks in 'Done' category goes to 'Old Tasks' view.</P>
    <P>In 'Old Tasks' view are all successfully finished tasks, with solution, executor and execution time.</P>
    <P>This app have responsive design and can be use with mobile phone.</P>
    <P>
      Are used styled-jsx, Formik, Yup, useReducer, HOC(guarded routes), Hook(using fetch), Error Boundary which fetches
      to server, moking and test with msv server, deployed on Heroku
    </P>
    <strong>Note: this is a free to use project!</strong>
    <P>Enjoy it!</P>
  </div>
)

export default About
