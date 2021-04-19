import { useState} from 'react';
import { useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) =>{

    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');


        //this function i.e put() is asynchronous 
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage  = (snap.bytesTransferred/snap.totalBytes) * 100;
            console.log(snap.bytesTransferred/snap.totalBytes);
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () =>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url);
        } )
    }, [file])

    return { progress, url, error }

}

export default useStorage;

