
import { Link } from "react-router-dom";
import "./Manufacturer.css";
const Manufacturer = () => {

    return (
        <>
            <div className="manucontainer">
                <div className="manu">
                    <nav>
                        <span><Link to={"/"}>Go back</Link></span>
                        <span><Link to={"/manufacturerRegister"}>Register</Link></span>
                        <span><Link to={"/manufacturerAddproduct"}>Add Product</Link></span>
                    </nav>
                </div>
                <div className="message">
                    <h1>If You New Manufacturer Here? Please Register YourSelf First From <Link to = {"/manufacturerRegister"} style={{color:"orange"}}>Here</Link></h1>
                </div>
                <div>
                    {/* Image */}
                </div>
            </div>
        </>
    );
}
export default Manufacturer;