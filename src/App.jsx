import Login from './components/Login';
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';

const App = () => {
  return (
    <>      
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/login" element={<Login />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;