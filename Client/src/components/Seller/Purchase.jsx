import { useRef } from "react";
import { Link } from "react-router-dom";
import GetProduct from "./GetProduct";

const Purchase = ({state,addr}) => {
  const ID = useRef();
  const Address = useRef();
  const _value = useRef();
  const purchase = async(event) => {
    event.preventDefault();
    const {contract} = state;
    const _id = ID.current.value;
    const _address = Address.current.value;
    const Value = _value.current.value;
    // console.log(_id, _address);
    try{
       await contract.methods.PurchaseFromManufacturer(_id,_address).send({from: addr, value: Value, gas: 480000});
       alert(`Product Number ${_id} Is Successfully Purchased`);
    }catch(error){
      console.log(error);
    }
  }
    return(
        <>
          <div>
            <div className="buttn">
            <span><Link to = {"/seller"}>Go Back</Link></span>
            </div>
            <div className="wrapper">
                <form className="fom" onSubmit={purchase}>
                <h1>Product Deteils</h1>
                <div className="input-box">
                  <div className="input-field">
                    <input type="text" placeholder="Product Name" required/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Product Number" required ref={ID}/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Product Price" required ref={_value}/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Manufacturer Address" required ref={Address}/>
                    <i className='bx bxs-package'></i>
                  </div>
                </div>
                  <button type="submit" className="btn">Purchase</button>
                </form>
            </div>
            <div>
                {/* display product list */}
            </div>
          </div>
          <div>
            <GetProduct state={state} addr={addr}/>
          </div>
        </>
    );
}

export default Purchase;