import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import { Quotes } from './Components/Quotes/Quotes';
import { Filter } from './Components/Filter/Filter';
import Food from './Components/Food/Food';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}>
                <Route path='' element= {<Landing/>}/>
                <Route path='quotes' element={<Quotes/>}/>
                <Route path='restraunts' element= {<Filter />} />
                <Route path='foods' element={<Food/>} />
              <Route path='contact' element={<ContactUs/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
