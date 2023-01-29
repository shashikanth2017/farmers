import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Add = () => {

    const{id}=useParams();
    const[Data,setData]=useState(null);
    const[load,setload]=useState(true);
    const[shash,setshash]=useState("hello");
    const navigate=useNavigate();
   
    
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
    
    const da=useState("nommmm");
    const Delete=()=>{
        fetch(" http://localhost:8500/books",Data.id,{
            method:"DELETE"
        })
        .then(()=>{
            navigate("/contact");

        })
    }
    return ( 
        <div className="a">
            <h2>heloo{da}</h2>
            <button onClick={Delete}>delete</button>
            <h2>{shash}{load}{id}is here</h2>
         {/* {Data && (
            <h2>{Data.body}</h2>
            )} */}
        </div>
     );
}
 
export default Add;