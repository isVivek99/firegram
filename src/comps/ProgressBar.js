import React from 'react';
import useStorage from '../hooks/useStorage';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile })=>{
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if(url){
            setFile(null);
        }
    },[url,setFile])


    
    return(
        <motion.div className="progress-bar"  
            initial={{width:0}}
            animate={{width:progress+'%'}} 
        ></motion.div>
        //<div className="progress-bar" style={{width: progress+'%'}}></div>
    )
}

export default ProgressBar;