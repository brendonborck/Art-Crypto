import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import GlobalStyle from './components/GlobalStyle';
import WatchVideo from './components/WatchVideo';
import UploadVideo from './components/Upload';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/watch" element={<WatchVideo/>}/>
        <Route path="/upload" element={<UploadVideo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
