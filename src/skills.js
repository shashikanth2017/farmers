import { useState } from "react";
import {useNavigate} from "react-router-dom";
import image from "C:/nodejs/shash-23/src/1.jpg";
const Skills = () => {
   const[user,setuser]=useState('');
   const[productname,setproductname]=useState('');
   const[price,setprice]=useState('');
   const[ispending,setispending]=useState(false);
   const[no,setno]=useState('');
   const[type,settype]=useState('');
   const history= useNavigate();

   const submit=(e)=>{
      e.preventDefault();
     
      setispending(true);

      const books={productname,price,no,type};
      fetch("http://localhost:8500/books",{
         method:'POST',
         headers:{"Content-Type":"application/json"},
         body: JSON.stringify(books)
      })
      .then(()=>{
         setispending(false);
         history("/");
      })

     

   };
   
    return ( 
        <div className="add" style={{backgroundImage:`url(${image})`, backgroundSize: "cover",
        height: "100vh",}}>
         
        <center><b><h3>Add product</h3></b></center>
        <center><form className="form" onSubmit={submit}>
           <label>User Name</label><input type="text"  className="us"  value={user} onChange={(s)=>setuser(s.target.value)}  required/>
           <label>product Name</label><input type="text" value={productname} onChange={(s)=>setproductname(s.target.value)} id="ui"required/>
           <label>price</label><input type="number" value={price} onChange={(s)=>setprice(s.target.value)} id="il"required/><br></br>
           <label>No's<input type="text" value={no} onChange={(s)=>setno(s.target.value)} required/></label>
           <br></br>
           <br></br>
           <label>item type</label><br></br>
           <select value={type} onChange={(s)=>settype(s.target.value)}>
            <option>Fruits</option>
            <option>Vegetables</option>
           </select><br></br>

           <br></br>
           {!ispending &&<button >Add product</button>}
           {ispending && <button disabled>adding product</button>}
           <br></br>
           <br></br>
           {/* <p>{user}
            {anime}
            {hero}</p> */}


        </form></center>
        </div>
     );
}
 
export default Skills;