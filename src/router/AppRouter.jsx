import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage } from '../heroes/pages/DcPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import {Navbar} from '../iu'
export const AppRouter = () => {
  return (
    <div>
      
         <Routes>
         <Route path="login" element={<LoginPage />} />
         <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </div>
  )
}
