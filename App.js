import React from 'react';
import { Provider } from 'react-redux';

import store from './Store/index';
import BugTracker from './components/BugTracker';

export default function App() {
  return (
    <Provider store={store}>
      <BugTracker />
    </Provider>
  );
}
