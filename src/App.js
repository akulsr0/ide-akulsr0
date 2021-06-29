import React from 'react';
import './App.css';
import SplitPane from 'react-split-pane';
import Editor from './components/Editor';
import Output from './components/Output';
import { AppContextProvider } from './context';
import { MIN_INNER_WIDTH } from './constants';

function App() {
  const width = window.innerWidth;
  return (
    <AppContextProvider>
      <div>
        <SplitPane
          split={width > MIN_INNER_WIDTH ? 'vertical' : 'horizontal'}
          defaultSize="70%"
        >
          <Editor />
          <Output />
        </SplitPane>
      </div>
    </AppContextProvider>
  );
}

export default App;
