import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './App.css';

const initialDataDom = document.querySelector('#initial-data');
let data: string = '';
if (initialDataDom !== null) {
  const dataJson = initialDataDom.getAttribute('data-json');
  if (dataJson !== null) {
    data = dataJson;
  }
}

ReactDOM.render(
  <App user={data} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
