import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import './App.css';
import ApartmentDetail from "./pages/ApartmentDetail.tsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/immobilier" element={<Apartments/>}/>
                <Route path="/apartments" element={<Apartments />} />
                <Route path="/apartments/:id" element={<ApartmentDetail />} />
            </Routes>
        </>
    );
}

export default App;