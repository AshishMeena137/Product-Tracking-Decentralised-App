import { Link } from "react-router-dom";

const Consumer = () => {
    return(
        <>
            <div className="manucontainer">
                <div className="manu">
                    <nav>
                        <span><Link to={"/"}>Go back</Link></span>
                        <span><Link to={"/consumerRegister"}>Register</Link></span>
                        <span><Link to={"/consumerPurchase"}>Purchase</Link></span>
                        <span><Link to={"/verifyProduct"}>Verify</Link></span>
                    </nav>
                </div>
                <div className="message">
                    <h1>If You New Consumer Here? Please Register YourSelf First From <Link to = {"/consumerRegister"} style={{color:"orange"}}>Here</Link></h1>
                </div>
            </div>
        </>
    );
}
export default Consumer;