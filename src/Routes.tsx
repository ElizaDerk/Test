import {Routes as Router, Route, Navigate, Outlet} from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext'
import Home from './pages/Home'
import Auth from './pages/Auth';

type Props = {}

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if(!authenticated) return <Navigate to='/auth' replace />

  return <Outlet />
}

const Routes = (props: Props) => {
  const { authenticated } = useContext(AuthContext)


  return (
    <Router>
      <Route path='/auth' element={<Auth />}/>
      <Route element={<PrivateRoutes />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Router>
  )
}

export default Routes