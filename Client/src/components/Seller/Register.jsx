import { Link } from "react-router-dom";

const Register = ({state,addr}) => {

    const register = async(event) => {
        event.preventDefault();
        const {contract} = state;
        try{
            await contract.methods.RegisterAsSeller().send({from: addr});
            alert("Thanks For Registeration Dear Saler");
        }catch(error){
            console.log("Error from Seller Registeration Page: ", error);
        }
    }
    return (
        <>
            <div className="container">
                <div>
                    <div className="buttn">
                        <span><Link to={"/seller"}>Go Back</Link></span>
                    </div>
                    <div className="wrapper">
                        <form className="fom" onSubmit={register}>
                            <h1>Registration</h1>

                            <div className="input-box">
                                <div className="input-field">
                                    <input type="text" placeholder="Full Name" required />
                                    <i className='bx bxs-user'></i>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder="Username" required />
                                    <i className='bx bxs-user'></i>
                                </div>
                            </div>

                            <div className="input-box">
                                <div className="input-field">
                                    <input type="email" placeholder="Email" required />
                                    <i className='bx bxs-envelope'></i>
                                </div>
                                <div className="input-field">
                                    <input type="number" placeholder="Phone Number" required />
                                    <i className='bx bxs-phone'></i>
                                </div>
                            </div>

                            <div className="input-box">
                                <div className="input-field">
                                    <input type="password" placeholder="Password" required />
                                    <i className='bx bxs-lock-alt'></i>
                                </div>
                                <div className="input-field">
                                    <input type="password" placeholder="Confirm Password" required />
                                    <i className='bx bxs-lock-alt'></i>
                                </div>
                            </div>

                            {/* <label><input type="checkbox" />I hereby declare that the above information provided is true and correct</label> */}

                            <button type="submit" className="btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;