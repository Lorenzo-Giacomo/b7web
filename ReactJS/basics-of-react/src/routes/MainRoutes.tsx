import { Routes, Route, useRoutes } from 'react-router-dom'
import { About } from '../pages/About'
import { AboutItem } from '../pages/AboutItem'
import { AboutLorenzo } from '../pages/AboutLorenzo'
import { AboutMatheus } from '../pages/AboutMatheus'
import { RequireAuth } from '../RequireAuth'

import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const MainRoutes = () => {
  return (
    useRoutes([
      {path: '/', element: <Home/>},
      {path: '/sobre', element: <RequireAuth><About/></RequireAuth>},
      {path: '/sobre/lorenzo', element: <AboutLorenzo/>},
      {path: '/sobre/matheus', element: <AboutMatheus/>},
      {path: '/sobre/:slug', element: <AboutItem/>},
      {path: '*', element: <NotFound/>},
    ])
    /*
    <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sobre' element={
          <RequireAuth>
            <About/>
          </RequireAuth>} />
          <Route path='/sobre/lorenzo' element={<AboutLorenzo />} />
          <Route path='/sobre/matheus' element={<AboutMatheus/>} />
          <Route path='/sobre/:slug' element={<AboutItem/>} />

          <Route path='*' element={<NotFound />} />
    </Routes>
    */
  )
}