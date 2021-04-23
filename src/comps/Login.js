
import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';

const Login  = ()=>{
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login }  = useAuth();//{currentUser, signUp}
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    async function handlesSubmit(e){
        e.preventDefault();
    
        try{
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        }catch{
            setError("failed to login");
        }
        setLoading(false);   
    }

    return(
        <>
        <Card>
            <Card.Body> 

                <h2 className="text-center mb-4">Login</h2>
                {/* { currentUser.email } */}
                {error && <Alert variant="danger">{error}</Alert>}
                
                <Form onSubmit={handlesSubmit}>

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />    
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />    
                    </Form.Group>

                    <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                </Form>

                <div className="test-credentials" style={{padding:"1rem", marginBottom:"0.5rem"}}>
                        <h5 style={{fontWeight:"bold"}}>test credentials</h5>
                        <h5 >email: <span style={{fontWeight:"bold"}}>ttt@ttt.com</span></h5> 
                        <h5>password: <span style={{fontWeight:"bold"}}>password</span></h5> 
                        <h6 style={{fontWeight:"bold"}}>(type the password dont copy-paste)</h6>
                    </div>
            
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Dont have an account? <Link to="/signup">Sign Up</Link>
        </div>
        </>
    );
}

export default Login;
