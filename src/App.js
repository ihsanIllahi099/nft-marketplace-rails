import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/homepage/Header';
import Home from './components/homepage/Home.js';
import Mint from './components/mint/Mint';
import UserNft from './components/nfts/UserNft';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<> <Header /> <Home /> </>} />
          <Route path="/mint" element={<> <Header /> <Mint /> </>} />
          <Route path="/my-nfts" element={<> <Header /> <UserNft /> </>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
