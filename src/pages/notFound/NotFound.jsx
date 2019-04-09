import React from 'react';
import { Card } from 'antd';
import './style.css';

const NotFound = () => (
  <Card>
    <h1>Not Found</h1>
    <p>Sorry, the page you visited does not exist or is not available.</p>
    <p>Contact your administrator if you are having problems.</p>
  </Card>
);

export default NotFound;
