import { Link } from "react-router-dom";
import { useRef } from "react";
import GetProduct from "./GetProduct";

const AddProduct = ({ state, addr }) => {

  const productName = useRef();
  const productBrand = useRef();
  const productPrice = useRef();
  const productSN = useRef();

  const addproduct = async (event) => {
    event.preventDefault();
    const { contract } = state;
    console.log(contract);
    const name = productName.current.value;
    const brand = productBrand.current.value;
    const price = productPrice.current.value;
    const sn = productSN.current.value;
    // console.log("Manufacturer: ", name,brand,price,sn);

    try {
      await contract.methods.AddProduct(name, brand, price, sn).send({ from: addr, gas: 480000 });
      alert("New Product is Added");
    } catch (error) {
      console.log("Manufacturer Add product: ", error);
    }
  }
  return (
    <>
      <div>
        <div className="buttn">
          <span><Link to={"/manufacturer"}>Go Back</Link></span>
        </div>
        <div className="wrapper">
          <form className="fom" onSubmit={addproduct}>
            <h1>Add Product</h1>
            <div className="input-box">
              <div className="input-field">
                <input type="text" placeholder="Product Name" ref={productName} required />
                <i className='bx bxs-package'></i>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Product Brand" ref={productBrand} required />
                <i className='bx bxs-package'></i>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Product Price" ref={productPrice} required />
                <i className='bx bxs-package'></i>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Product SN" ref={productSN} required />
                <i className='bx bxs-package'></i>
              </div>
            </div>
            <button type="submit" className="btn">Add</button>
          </form>
        </div>
        <div>
          {/* display product list */}
        </div>
      </div>
      <div>
      <div>
        <GetProduct state={state} addr={addr}/>
      </div>
      </div>
    </>
  );
}

export default AddProduct;