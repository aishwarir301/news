import React from 'react'
import Nav from './Nav'
import Page1 from './Page1'
import Page2 from './Page2'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buiness from './Buiness';
import Sci from './Sci';
import Bitcoin from './Bitcoin';
import Genral from './Genral';
import Health from './Health';
import Technology from './Technology';
function Layout() {
    
    return (
        <div><BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />} >
                    <Route index element={<Page1/>} />
                    <Route path="sports" element={<Page2 />} />
                    <Route path="bitcoin" element={<Bitcoin />} />
                    <Route path="business" element={<Buiness />} />
                    <Route path="sci" element={<Sci />} />
                    <Route path="general" element={<Genral />} />
                    <Route path="health" element={<Health />} />
                    <Route path="technology" element={<Technology />} />
                </Route>
            </Routes>
        </BrowserRouter></div>
    )
}

export default Layout