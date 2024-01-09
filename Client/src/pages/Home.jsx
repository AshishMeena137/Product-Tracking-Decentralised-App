import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
    return (
        <>
            <div className="mancontainer">
                <div className="imanu">
                    <nav className="ln">
                        <span><Link to={"/manufacturer"}>Manufacturer</Link></span>
                        <span><Link to={"/seller"}>Seller</Link></span>
                        <span><Link to={"/consumer"}>Consumer</Link></span>
                    </nav>
                </div>
                <div className="images">
                    <span className="img1"></span>
                    <span className="img2"></span>
                    <span className="img3"></span>
                </div>
                <div className="discription">
                    <p>Effortlessly track and trace products at every step of the supply chain with our intuitive Dapp</p>
                </div>
            </div>
        </>
    )
}

export default Home;