import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProviderAuth } from '../hooks/useAuth'

import { Layout } from '../containers/Layout'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Login } from '../pages/Login'
import { Hotels } from '../pages/Hotels'
import Hotel from '../pages/Hotel'
import Register from '../pages/Register'
import Loader from '../components/Loader/Loader'
import { NotFound } from '../pages/NotFound.jsx'

import { Dashboard } from '../dashboard/Dashboard'

import DUsers from '../dashboard/DUsers'
import DHotels from '../dashboard/DHotels'
import RevPage from '../pages/Reviews.jsx'

import DEditUser from '../dashboard/DEditUser'

import { About } from '../pages/About'

import { PasswordRecovery } from '../pages/PasswordRecovery'

import { ChangePassword } from '../pages/ChangePassword'

function App () {
  return (
    <ProviderAuth>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels/' element={<Hotels />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/hotel/:name' element={<Hotel />} />
            <Route path='/register' element={<Register />} />
            <Route path='/loader' element={<Loader />} />
            <Route path='/about' element={<About />} />
            <Route path='/passwordRecovery' element={<PasswordRecovery />} />
            <Route path='/changePassword' element={<ChangePassword />} />

            <Route path='/dashboard' element={<Dashboard />} />

            <Route path='/dashboard/users' element={<DUsers />} />
            <Route path='/dashboard/users/:id' element={<DEditUser />} />

            <Route path='/dashboard/hotels' element={<DHotels />} />
            <Route path='/reviews' element={<RevPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProviderAuth>
  )
}

export { App }
