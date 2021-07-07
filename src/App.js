import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SplitPane from 'react-split-pane';
import Editor from './components/Editor';
import Output from './components/Output';
import { AppContextProvider } from './context';
import { MIN_INNER_WIDTH } from './constants';

function App({ codeSnippetId }) {
  const width = window.innerWidth;
  return (
    <AppContextProvider>
      <div>
        <SplitPane
          split={width > MIN_INNER_WIDTH ? 'vertical' : 'horizontal'}
          defaultSize="70%"
        >
          <Editor codeSnippetId={codeSnippetId} />
          <Output />
        </SplitPane>
      </div>
    </AppContextProvider>
  );
}

App.defaultProps = {
  codeSnippetId: '',
};

App.propTypes = {
  codeSnippetId: PropTypes.string,
};

export default App;
