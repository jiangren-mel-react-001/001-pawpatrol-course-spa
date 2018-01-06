import React from 'react';
import { Switch, Route, Redirect } from 'react-router'
import CourseList from './course/CourseList';
import Teacher from './teacher/Teacher';
import CourseDetail from './course/CourseDetail';
import CourseEdit from './course/CourseEdit';
import CourseCreate from './course/CourseCreate';
import Login from './login/Login';

export default ({token, onTokenChanged}) => (
<Switch>
  <Route exact path="/" component={CourseList} />
  <Route exact path="/login" render={
    (props) => <Login onTokenChanged={onTokenChanged} history={props.history} />
  } />
  <Route exact path="/course" render={props => <CourseList {...props} />}/>
  <Route exact path="/course/create" render={
    ({ history }) => token ? <CourseCreate history={history} /> : <Redirect to='/login' />
  } />
  <Route exact path="/course/detail" render={
    ({ location, history }) => <CourseDetail detail={location.state.detail}
      history={history} token={token}/>
  }/>
  <Route exact path="/course/edit" render={
    ({ location, history }) => <CourseEdit detail={location.state.detail} history={history} />
  }/>
  <Route exact path="/teacher" component={Teacher}/>
</Switch>
);
