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
      return  auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password){
       return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut();
    }

    useEffect(()=>{
        
       const unsubscribe = auth.onAuthStateChanged(user=>{         //verifies if user logged in
            setCurrentUser(user);    
            setLoading(false);                                     //changes the loading state to false                     
            
        })
        return unsubscribe;
    },[])
    
    
    const value ={
        login,
        logout,
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
