import Board from './components/board';
import './components/style.css';
import background from './img/placeholder.png';

function App() {
  return (
    <div className="App" id='main' style={{ backgroundImage: `url(${background})`, width: "100%", height: "100%", backgroundSize: 'cover' }}>
      <Board></Board>
    </div>
  );
}

export default App;
