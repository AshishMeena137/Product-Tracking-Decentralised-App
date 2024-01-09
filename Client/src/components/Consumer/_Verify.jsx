import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const _Verify = ({state}) => {
  const SNRef = useRef();
  const [list,setList] = useState({
    0: "",
    1: [{1: "",2: "",4: "",6: ""}],
  });

    const verify = async(event) => {
      event.preventDefault();
      const {contract} = state;
      const _SN = SNRef.current.value;
       console.log(_SN);
      try{
         const value = await contract.methods.Verify(_SN).call();
         console.log(value);
         setList(value);
        //  console.log(list);
         alert(`Blow are the deteils of the Product`);
      }catch(error){
        console.log(error);
      }
    }
    return(
        <>
          <div>
            <div className="buttn">
            <span><Link to = {"/consumer"}>Go Back</Link></span>
            </div>
            <div className="wrapper">
                <form className="fom" onSubmit={verify}>
                <h1>Product Deteils</h1>
                <div className="input-box">
                  <div className="input-field">
                    <input type="text" placeholder="Product SN" ref={SNRef} required/>
                    <i className='bx bxs-package'></i>
                  </div>
                </div>
                  <button className="btn">Verify Product</button>
                </form>
            </div>
            <div>
                <p style={{ color: "whitesmoke" }}>Manufacturer Address: {list[0]}</p>
                <p style={{ color: "whitesmoke" }}>Seller Address: {list[1][0][6]}</p>
                <p style={{ color: "whitesmoke" }}>Product Name: {list[1][0][1]} Product Brand: {list[1][0][2]} Product SN: {list[1][0][4]}</p>
            </div>
          </div>
        </>
    );
}

export default _Verify;