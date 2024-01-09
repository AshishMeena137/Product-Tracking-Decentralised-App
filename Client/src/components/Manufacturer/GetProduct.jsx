import { useEffect, useState } from "react";
import "./GetProduct.css"

const GetProduct = ({ state, addr }) => {
    const [value, setValue] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const getproduct = async () => {
            try {
                const result = await contract.methods.GetProduct().call({ from: addr });
                console.log("result getted", result);
                setValue(result);
            } catch (error) {
                console.log(error);
            }
        }
        contract && getproduct();
    }, [contract]);
    return (
        <>
            <div className="contain">
                <div style={{ color: "wheat" }} className="topbar">
                    <table>
                        <tbody>
                            <tr>
                                <td>NAME</td>
                                <td>BRAND</td>
                                <td>PRICE</td>
                                <td>SN</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ color: "whitesmoke" }}>
                    <table>
                        <tbody>
                            {value.map((proposal) => {
                                return (
                                    <tr key={proposal.ProductSN}>
                                        <td>{proposal.ProductName}</td>
                                        <td>{proposal.ProductBrand}</td>
                                        <td>{proposal.ProductPrice}</td>
                                        <td>{proposal.ProductSN}</td>
                                        <td>{proposal.sold}</td>
                                        <td>{proposal.soldTo}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default GetProduct;