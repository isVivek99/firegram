import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';


const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(()=>{
        
       const unsubscribe = auth.onAuthStateChanged(user=>{         //verifies if user logged in
            setCurrentUser(user);    
            setLoading(false);                                     //changes the loading state to false                     
            
        })
        return unsubscribe;
    },[])
    
    
    const value ={
        currentUser,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {/* checks if loading is false because first we wan to load user and then print children */}
            { !loading && children }   
        </AuthContext.Provider>
    )
}
