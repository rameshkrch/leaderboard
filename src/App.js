import Board from './components/board';
import './components/style.css';
import background from './img/placeholder.png'; 

function App() {
  return (
    <div className="App" id='main' style={{ backgroundImage: `url(${background})` }}>
      <Board></Board>
    </div>
  );
}

export default App;
