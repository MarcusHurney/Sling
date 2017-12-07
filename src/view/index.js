import React from 'react';
import Routes from '../routes';
import MockBrowser from './Common/components/MockBrowser';

export default () => (
  <div className="root">
    <MockBrowser />
    <Routes />
  </div>
);
