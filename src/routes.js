

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditContact from './components/EditContact';
import Home from './Home';

function RoutesApp() {

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditContact />}/>


            <Route path="*" element={<Home/>} />
          </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;

/* Se o Header tiver links add ele junto com a routesapp

  <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditContact />}/>


            <Route path="*" element={<Home/>} />
          </Routes>
        </BrowserRouter>

        */