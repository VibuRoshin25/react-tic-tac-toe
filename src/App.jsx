import Header from "./components/Header";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player number="1" symbol="X" />
            <Player number="2" symbol="O" />
          </ol>
          GAME BOARD
        </div>
      </main>
    </>
  );
}

export default App;
