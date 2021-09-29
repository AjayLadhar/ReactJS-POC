import {useState, useEffect} from "react";

export const REQUEST_STATUS  = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

function useRequestDelay(delayTime = 1000, initialData = []){

    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState(false);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        
        async function delayFunc(ms){
            try{
                await delay(ms);
                //throw "Had Error!"
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data);
            }
            catch(e){
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        
        delayFunc(delayTime);

    }, []);

    function updateRecord (recordUpdated) {

        const newRecords = data.map( function(rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        })

        async function delayFunction(delayTime){
            try{        
                await delay(delayTime);
                setData(newRecords);
            }
            catch(error){
                console.log("error occured while updating recods", error);
            }
        }
        
        delayFunction(2000);
    }

    return{
        data, requestStatus, error, updateRecord
    };
}

export default useRequestDelay;