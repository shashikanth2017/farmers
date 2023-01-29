import {useState,useEffect}  from "react";

const Sub = (url) => {
    const[Data,setData]=useState(null);
    const[load,setload]=useState(true);
    const handleDelete = (id) => {
        const newport= Data.filter(Data=>Data.id!==id);
        setData(newport);}
   
    return (  
        useEffect(()=>{
            setTimeout(() => {
                
           
            fetch(" http://localhost:8500/books")
            .then(res=>{ return res.json();})
            .then((he) =>{
                setData(he);
                setload(false);
            })
            
        },200);  
         },[url])
    );
    return{Data,load,handleDelete}
}
 
export default Sub;