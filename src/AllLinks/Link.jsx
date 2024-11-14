import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OfferPackages from '../OtherPages/PackageCard';




export default function Link() {
  return (
    <div>
      
<BrowserRouter>
<Routes>
    <Route  path="/OfferPackages" element={<OfferPackages/>}/>
</Routes>
</BrowserRouter>



    </div>
  )
}
