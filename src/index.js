import React from 'react'
import  ReactDOM  from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header/index';
import Survey from './pages/Survey'
import ClientForm from './components/ClientForm/index';
import FreelanceForm from './components/FreelanceForm/index';
import Error from './components/Error/index';
import Freelances from './pages/Freelances/index';
import Results from './pages/Results/index';
ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumbers" element = {<Survey />}>
          <Route path="client" element={<ClientForm />} />
          <Route path="freelance" element={<FreelanceForm />} />

        </Route>
        <Route path="*" element={<Error />} />
        <Route path = "/freelances" element = {<Freelances />} />
        <Route path="/Results" element = {<Results />} />
      </Routes>
  
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)