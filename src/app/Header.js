import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/course">Courses</Link></li>
        <li><Link to="/teacher">Teachers</Link></li>
      </ul>
);