import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../containers/Home/home';
import Recepcao from '../containers/Recepcao/recepcao';


function RoutesApplication() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/recepcao' element={<Recepcao />} />
            </Routes>
        </Router>
    )
}

export default RoutesApplication;