import background from './assets/bg.jpg'
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header" style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: "cover"
        }}>
        <h1 style={{fontSize: "64px"}}>audio pirate</h1>
        <p>coming soon....</p>
      </header>
    </div>
  );
}

export default App;
