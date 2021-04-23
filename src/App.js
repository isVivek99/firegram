import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Signup from './comps/Signup';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';



function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    
    <div className="App">
      
      
        <Container className="d-flex alignitems-center justifycontent-center mt-5"  style={{ minHeight:"100vh" }}>
          <div className="w-100" style={{maxWidth:"400px "}}> 
          <Router>
           <AuthProvider>
              <Switch>
                <Route exact path="/" component={Dashboard} />
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
