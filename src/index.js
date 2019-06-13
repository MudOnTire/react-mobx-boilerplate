import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from './components/App';
import postStore from './stores/PostStore';

const Root = () => (
  <Provider postStore={postStore}>
    <App />
  </Provider>
)


ReactDOM.render(<Root />, document.getElementById('app'));