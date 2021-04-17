import React, { useState } from 'react';


const UploadForm = ()=>{

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types=["image/png","image/jpeg"];


    const changeHandler = (e)=>{
        console.log(e.target.files[0]);
        let selected = e.target.files[0];

        if (selected) {
            if (selected.type === types[0] || selected.type === types[1]) {
                console.log("selected: "+selected.type);
                setFile(selected);
                setError("");
            }else{
                console.log("error");
                setFile(null);
                setError("Please select an image file ( image/png OR image/jpeg)");
            }
        }

        
    }

    return(
        <form>
             <input type="file" onChange={changeHandler}/>

             <div className="output">
                {error && <div className="error">{ error }</div>}
                {file && <div className="fileName">{ file.name }</div>}  
            </div>
        </form>
    )
}

export default UploadForm;