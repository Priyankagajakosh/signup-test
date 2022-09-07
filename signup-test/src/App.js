
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Signup from './components/Signup';

function App() {
  return (<BrowserRouter>
    <Routes>
        <Route path="/Signup" element={<Signup/>} />
           
    </Routes>
  </BrowserRouter>
  )
}

export default App;
