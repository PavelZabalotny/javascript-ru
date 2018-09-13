import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import {articles} from "./fixtures";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root articles={articles}/>, document.getElementById('root'));
registerServiceWorker();
