import './App.css';
import Frontend from './Frontend/frontend';
import Backend from './Backend/Backend';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Frontend />}></Route>
          <Route path='/admin' element={<Backend />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
