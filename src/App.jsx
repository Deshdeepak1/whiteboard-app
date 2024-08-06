import Board from "./components/Board";
import Toolbar from "./components/Toolbar";
import BoardProvider from "./store/BoardProvider";

function App() {
  return (
    <BoardProvider>
      <Board />
      <Toolbar />
    </BoardProvider>
  );
}

export default App;
