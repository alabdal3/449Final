import { Routes, Route } from 'react-router-dom';
import './App.css';
import MemeGenerator from './memes';
import NavBar from './NavBar'
import AbtApp from './abtApp';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <div className="title">
              <h1>How's your Mood Today?</h1>
            </div>
            <MemeGenerator />
          </>
        } />
        <Route path="/about" element={<AbtApp />} />
      </Routes>
    </>
  );
}

export default App;