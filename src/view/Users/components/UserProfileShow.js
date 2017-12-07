import React from 'react';
import { Link } from 'react-router-dom';

const UsersIndex = ({ match }) => (
  <div>
    <span>User's Name:</span>
    <h1>{match.params.userId}</h1>
  </div>
);

export default UsersIndex;
