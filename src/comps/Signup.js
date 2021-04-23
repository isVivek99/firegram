
import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext'

const Signup  = ()=>{
    
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup }  = useAuth();//{currentUser, signUp}
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handlesSubmit(e){
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmationRef.current.value){
            console.log(passwordRef.current.value);
            
            return setError("passwords donot match!");
        }

        try{
            setError('');
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value);
        }catch{
            setError("failed to create an account");
        }
        setLoading(false);   
    }

    return(
        <>
        <Card>
            <Card.Body> 

                <h2 className="text-center mb-4">Sign Up</h2>
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

                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmationRef} required />    
                    </Form.Group>

                    <Button disabled={loading} className="w-100" type="submit">Sign Up </Button>
               
                </Form>
            
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? Log In
        </div>
        </>
    );
}

export default Signup;