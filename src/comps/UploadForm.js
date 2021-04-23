import React, { useState } from 'react';
import ProgressBar from './ProgressBar';



const UploadForm = ()=>{

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types=["image/png","image/jpeg"];


    const changeHandler = (e)=>{
        
       // console.log(e.target.files[0]);
        let selected = e.target.files[0];

        if (selected) {
            if (selected.type === types[0] || selected.type === types[1]) {
                //console.log("selected: "+selected.type);
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
            <label className="label">
                <input type="file" onChange={changeHandler}/>
                <span className="span">+</span>
             </label>
             <div className="output">
                 {console.log(file)}
                 { error && <div className="error">{error}</div>}
                 {file && <div className="fileName">{ file.name }</div>}  
                 {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm;