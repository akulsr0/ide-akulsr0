import "./App.css";
import SplitPane from "react-split-pane";
import Editor from "./components/Editor";
import Output from "./components/Output";
import { AppContextProvider } from "./context";

function App() {
  return (
    <AppContextProvider>
      <div>
        <SplitPane split="vertical" defaultSize={"60%"}>
          <Editor />
          <Output />
        </SplitPane>
      </div>
    </AppContextProvider>
  );
}

export default App;
