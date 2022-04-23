import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DetailCar, Home } from './pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:idCar' element={<DetailCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
