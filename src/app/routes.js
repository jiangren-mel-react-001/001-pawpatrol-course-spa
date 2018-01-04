import React from 'react';
import { Switch, Route } from 'react-router'
import CourseList from './course/CourseList';
import Teacher from './teacher/Teacher';
import CourseDetail from './course/CourseDetail';
import CourseEdit from './course/CourseEdit';
import CourseCreate from './course/CourseCreate';

export default () => (
<Switch>
  <Route exact path="/" component={CourseList} />
  <Route exact path="/course" render={props => <CourseList {...props} />}/>
  <Route exact path="/course/create" component={CourseCreate} />
  <Route exact path="/course/detail" render={
    ({ location, history }) => <CourseDetail detail={location.state.detail} history={history} />
  }/>
  <Route exact path="/course/edit" render={
    ({ location, history }) => <CourseEdit detail={location.state.detail} history={history} />
  }/>
  <Route exact path="/teacher" component={Teacher}/>
</Switch>
);