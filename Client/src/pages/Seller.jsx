import { Link } from "react-router-dom";

const Seller = () => {
    return(
        <>
            <div className="manucontainer">
                <div className="manu">
                    <nav>
                        <span><Link to={"/"}>Go back</Link></span>
                        <span><Link to={"/sellerRegister"}>Register</Link></span>
                        <span><Link to={"/purchase"}>Purchase</Link></span>
                    </nav>
                </div>
                <div className="message">
                    <h1>If You New Seller Here? Please Register YourSelf First From <Link to = {"/sellerRegister"} style={{color:"orange"}}>Here</Link></h1>
                </div>
                <div>
                    {/* Image */}
                </div>
            </div>
        </>
    );
}
export default Seller;