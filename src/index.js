import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path="/">
        <App />
      </Route>
      <Route
        path="/:id"
        render={(props) => <App codeSnippetId={props.match.params.id} />}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
