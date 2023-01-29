import { useState } from "react";
import { Link } from "react-router-dom";


const Portfolio = ({portfolios,title,handleDelete})=>{
    const[count,setcount]=useState(0);
    function Vegetables(props){
        return <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OueeSz_tKzBM3ixuI_5P7Yg2FMlDWuINLg&usqp=CAU"  className="icon"/>
    
          </figure>;

    }
    function Fruits(props){
        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw93n3TziqrrATJuLvHdRGbJTgAMK0aLhk7w&usqp=CAU"  className="icon"/>
          </figure>;

    }
    const head=()=>{
        return <h1 className="title">product list</h1>;

    }
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
    return [(<div className="title">
        {/* <p > {count} item</p>
        <center><a href="https://www.bhimupi.org.in/" target={"_blank"}><button >pay</button></a></center>
        <br></br> */}

    </div>),(
       <div className="flex-container">
      
        {portfolios.map((portfolio)=>(
                <div className="preview" key={portfolio.id}>
                     <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw93n3TziqrrATJuLvHdRGbJTgAMK0aLhk7w&usqp=CAU"  className="icon"/>
    
                  </figure>
    
                    <Link to={`/contact/${portfolio.id}`}>

                    <h2>{portfolio.productname}</h2>
                    </Link>
                    <p>price: {portfolio.price}</p>
                    <p>{portfolio.no} left</p>
                    <button  onClick={()=>{setcount(count+1)}}>Add item </button>
                    <button onClick={()=>{setcount(count-1)}}>Remove item</button>
                    
                </div>
            ))}
           
       </div>
    )];
}
export default Portfolio;