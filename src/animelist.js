import { useEffect, useState } from "react";
import Portfolio from "./portfolio";
import { useNavigate } from "react-router-dom";
import image from "C:/nodejs/shash-23/src/3.jpg";
// import Sub from "./sub";
const Animelist = () => {
    const[Data,setData]=useState(null);
    const[load,setload]=useState(true);
    const navigate=useNavigate();
    
    const handleDelete = (id) => {
        const newport= Data.filter(Data=>Data.id!==id);
        setData(newport);
        
       
    
    }
    const[shash,setshash]=useState("hello");
   
    
        useEffect(()=>{
            setTimeout(() => {
                
           
            fetch(" http://localhost:8500/books")
            .then(res=>{ return res.json();})
            .then((he) =>{
                setData(he);
                setload(false);
            })
            
        },200);  
         },[])
    

 



    return (
        
        <div className="animelist" style={{backgroundImage:`url(${image})`, backgroundSize: "cover",
        height: "100vh",}}>
            {load && <p>Loading...</p>}
            
        {Data &&<Portfolio  portfolios={Data} title="Product list"/> }
         {/* <Portfolio portfolios={portfolio.filter((portfolio)=>portfolio.id===1)}title='Harry books!'/> */}
         {/* <h1>{shash}</h1> */}
         
         {/* <button onClick={()=>(setcount(count+1))}>press</button> */}
         {/* <p className="title">you clicked {count}times</p> */}
        </div>
      );
}
 
export default Animelist;