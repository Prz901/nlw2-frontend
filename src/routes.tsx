import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Ladding from './Pages/Ladding'
import TeacherList from './Pages/TeacherList'
import TeacherForm from './Pages/TeacherForm'

export default () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Ladding} />
      <Route exact path='/study' component={TeacherList} />
      <Route exact path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  )
}
