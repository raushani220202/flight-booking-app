import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import AllHotels from "./pages/all hotels/AllHotels";
import Hotel from "./pages/hotel/Hotel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<AllHotels />} />
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

