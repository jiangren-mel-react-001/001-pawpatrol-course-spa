import React from 'react';
import { Switch, Route } from 'react-router'
import Course from './course/Course';
import Teacher from './teacher/Teacher';

export default () => (
<Switch>
  <Route exact path="/" component={Course}/>
  <Route exact path="/course" component={Course}/>
  <Route path="/teacher" component={Teacher}/>
</Switch>
);