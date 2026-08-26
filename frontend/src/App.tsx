import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import './App.css';

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/immobilier" element={<Apartments/>}/>
            </Routes>
        </>
    );
}

export default App;