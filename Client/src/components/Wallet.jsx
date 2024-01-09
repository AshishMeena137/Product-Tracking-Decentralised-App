import { useState,useEffect } from "react";

const Wallet = ({state,setAddress}) => {
    const [balance,setBalance] = useState(0);
    const [account,setAccount] = useState("None");

    const {web3} = state;
    useEffect(()=>{
        async function getAddress(){
            const select = document.querySelector("#selectAccount");
            try{
                var options = await web3.eth.getAccounts();
                for(let i=0; i<options.length; i++){
                    let opt = options[i];
                    let element = document.createElement("option");
                    element.textContent = opt;
                    element.value = opt;
                    select.appendChild(element);
                }
            }catch(error){
                setProvider("Failed to connect");
            }
        }
        web3 && getAddress();
    },[web3]);
    async function selectAccount(){
        let selectAddress = document.querySelector("#selectAccount").value;
        if(selectAddress && selectAddress !== "Choose an account"){
            let accountBalance = await web3.eth.getBalance(selectAddress);
            let etherBalance = await web3.utils.fromWei(accountBalance,"ether");
            setAccount(selectAddress);
            setBalance(etherBalance);
            setAddress(selectAddress);
        }
    }
    return(
        <div>
            <form>
                <p>
                    <select id="selectAccount" onChange={selectAccount} style={{color: "whitesmoke"}}>
                    <option style={{color: "whitesmoke"}}>Choose an account</option>
                    </select>
                </p>
            </form>
                <p>
                    <span style={{color: "whitesmoke"}}>Account Connected: {account}</span>
                    <br></br>
                    <span style={{color: "whitesmoke"}}>Account Balance: {balance}</span>
                </p>
        </div>
    )
}

export default Wallet;