import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormDataProvider } from './FormDataContext';

ReactDOM.render(
  <FormDataProvider>
    <App />
  </FormDataProvider>,
  document.getElementById('root')
);