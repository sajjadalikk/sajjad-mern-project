import {useState, useEffect} from 'react';

const useEmpFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errMessage, setErrorMessage] = useState(null);
    
    useEffect(() => {
      console.log('Use effect is being used')
      fetch(url).then((response) => {
        if(!response.ok){
          throw new Error('An error occurred while fetching  users. Please contact side admin.')
        }
        return response.json();
       }).then((response) => {
        setData(response);
        setIsLoading(false);
        setErrorMessage(null)
       }).catch((error) => {
       setErrorMessage(error.message);
       setIsLoading(false);
     });
    }, [url]);
    return {data, isLoading, errMessage};    
}

export default useEmpFetch;
