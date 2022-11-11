import React from 'react'
import { Navbar } from '../../iu';
import { DcPage } from '../pages/DcPage'
import { MarvelPage } from '../pages/MarvelPage'
import { Route,Routes,Navigate } from 'react-router-dom'
import { Heroe } from '../pages/Heroe.jsx';
import { Search } from '../pages/Search.jsx';
export const HeroesRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
        <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="search" element={<Search />} />
        <Route path="hero/:id" element={<Heroe />} />
        {/*Search y hero by id */}
        <Route path="/" element={<Navigate to="/marvel"/>} />
      </Routes>
      </div>
    </div>
  )
}
