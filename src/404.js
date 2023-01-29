import { Link } from "react-router-dom";
const Error = () => {
    return (  
       <center> <div className="err">
            <h2>oops,can't fetch anything</h2>
            <Link to="/contact">go contact</Link>
        </div></center>
    );
}
 
export default Error;