import './App.css';
import Feed from './components/Feed/Feed';
import Image from './components/Image/Image';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Image />
      <div className="feed">
        <Feed />
      </div>
    </div>
  );
}

export default App;
