import React, { useEffect, useState } from "react";
import axios from "axios";


const useAxiosApi = () => {
    const [apiData,setData]=useState([]);
    const [loading,setLoading]=useState(true);
   useEffect(()=>{
    if(apiData.length==0){
        axios.get("https://quizapi.io/api/v1/questions?apiKey=BeW78VCtxuvRpG0CV6ITGDmNEfUYDJkqbxXiSX28&category=react&difficulty=Easy&limit=10&tags=React").then((data)=>(
            setData(data?.data),
            setLoading(false)
        ))
        
    }
   },[])




  return {apiData,loading};
};

export default useAxiosApi;