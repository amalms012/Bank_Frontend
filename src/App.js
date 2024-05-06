import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'

import Opstmt from './pages/Opstmt'


function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/home" exact />
          <Route component={Opstmt} path="/opstmt" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App


// import React from 'react'

// import {BrowserRouter as Routes, Route} from "react-router-dom"

// import { AuthProvider } from './context/AuthContext'

// import Homepage from './views/Homepage'
// import Registerpage from './views/Registerpage'
// import Loginpage from './views/Loginpage'
// import Dashboard from './views/Dashboard'
// import Navbar from './views/Navbar'

// import Opstmt from './pages/Opstmt'
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'


// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>

//         < Navbar/>
//         <Routes>
//           <Route component={Dashboard} path="/dashboard" exact />
//           <Route component={Loginpage} path="/login" />
//           <Route component={Registerpage} path="/register" exact />
//           <Route component={Homepage} path="/home" exact />
//           <Route component={Opstmt} path="/opstmt" exact />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   )
// }

// export default App