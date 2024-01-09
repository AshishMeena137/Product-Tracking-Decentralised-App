
import './App.css';
import ABI from "./contracts/ProductTracking.json";
import {Web3} from "web3";
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Manufacturer from './pages/Manufacturer';
import Seller from "./pages/Seller";
import Consumer from "./pages/Consumer";
import Register from './components/Manufacturer/Register';
import AddProduct from './components/Manufacturer/AddProduct';
import Home from './pages/Home';
import Sregister from './components/Seller/Register';
import Purchase from './components/Seller/Purchase';
import Cregister from "./components/Consumer/Register";
import Cpurchase from "./components/Consumer/Purchase";
import Wallet from './components/Wallet';
import { useEffect, useState } from 'react';
import _Verify from './components/Consumer/_Verify';

function App() {

  const [addr,setAddr] = useState();
  const [state,setState] = useState({
    web3: null,
    contract: null,
  });

  function setAddress(address){
      setAddr(address);
  }

  const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/manufacturer", element: <Manufacturer />},
    {path: "/seller", element: <Seller />},
    {path: "/consumer", element: <Consumer />},
    {path: "/manufacturerRegister", element: <Register state={state} addr={addr}/>},
    {path: "/manufacturerAddproduct", element: <AddProduct state={state} addr={addr}/>},
    {path: "/purchase", element: <Purchase state={state} addr={addr}/>},
    {path: "/sellerRegister", element: <Sregister state={state} addr={addr}/>},
    {path: "/consumerRegister", element: <Cregister state={state} addr={addr}/>},
    {path: "/consumerPurchase", element: <Cpurchase state={state} addr={addr}/>},
    {path: "/verifyProduct", element: <_Verify state={state}/>}
  ]);

    useEffect(() =>{
      const init = async() => {
          const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
          const web3 = new Web3(provider);
          const networkId = await web3.eth.net.getId();
          const deployerNetwork = ABI.networks[networkId];
          const contract = new web3.eth.Contract(
            ABI.abi,
            deployerNetwork.address
          );
          console.log(web3);
          console.log(contract);
          setState({web3: web3, contract : contract});
      }
      init();
    },[]);
  return (
    <>
      <Wallet setAddress={setAddress} state={state}/>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
