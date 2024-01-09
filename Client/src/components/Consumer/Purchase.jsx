import { useRef } from "react";
import { Link } from "react-router-dom";
import History from "./History";

const Purchase = ({state,addr}) => {
  const id = useRef();
  const address = useRef();
  const Price = useRef();

    const purchase = async(event) => {
      event.preventDefault();
      const {contract} = state;
      const _ID = id.current.value;
      const _Address = address.current.value;
      const price = Price.current.value;
      //  console.log(_ID,_Address);
      try{
         await contract.methods.PurchaseFromSeller(_Address,_ID).send({from: addr,value: price, gas: 480000});
         alert(`Product Number ${_ID} Is Successfully Purchased`);
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
                <form className="fom" onSubmit={purchase}>
                <h1>Product Deteils</h1>
                <div className="input-box">
                  <div className="input-field">
                    <input type="text" placeholder="Product Name" required/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Product Number" required ref={id}/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Product Price" required ref={Price}/>
                    <i className='bx bxs-package'></i>
                  </div>
                  <div className="input-field">
                    <input type="text" placeholder="Seller Address" required ref={address}/>
                    <i className='bx bxs-package'></i>
                  </div>
                </div>
                  <button className="btn">Purchase</button>
                </form>
            </div>
            <div>
                {/* display product list */}
            </div>
          </div>
          <div>
            < History state={state} addr={addr}/>
          </div>
        </>
    );
}

export default Purchase;