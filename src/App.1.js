import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import { Routes, Route } from "react-router-dom";

export function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Cards />} />
                <Route path='/cart/:id' element={<CardsDetails />} />
            </Routes>
        </>
    );
}
