import React from 'react';
import Signup from './comps/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './comps/Login';
import PrivateRoute from "./comps/PrivateRoute";



function App() {

  return (
    
    <div className="App1">
      
      
        <Container className="d-flex flex-row jsutifycontent-center mt-5"  style={{ minHeight:"100vh" }}>
          <div className="w-100"> 
          <Router>
           <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
           </AuthProvider>
          </Router>
          </div>
        </Container>    
      </div>
  );
}

export default App;
