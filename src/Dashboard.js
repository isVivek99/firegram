import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';


function Dashboard(){

    const [selectedImg, setSelectedImg] = useState(null);
   const [error,setError] = useState(""); 
   const{ currentUser, logout } = useAuth();

   function handleLogout(){

   }
    return(

        <div className="App">
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>{currentUser.email}
            <Title/>
            <UploadForm/>
            <ImageGrid setSelectedImg = {setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
            <div className="w-100 text-center mt-2">
            <Button variant="link" onCLick={handleLogout}>Log out</Button>   
            </div>
        </div>

    );

}
export default Dashboard;