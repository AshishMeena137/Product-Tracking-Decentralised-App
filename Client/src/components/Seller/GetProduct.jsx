import { useEffect, useState } from "react";

const GetProduct = ({ state, addr }) => {
    const [result, setResult] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const getproduct = async () => {
            try {
                const list = await contract.methods.AllProduct().call({ from: addr });
                console.log(list);
                setResult(list);
            } catch (error) {
                console.log(error);
            }
        }
        contract && getproduct();
    }, [contract]);
    return (
        <>
            <div>
                <div style={{ color: "wheat" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product Name </td>
                                <td>Product Brand </td>
                                <td>Product SN </td>
                                <td>Product Sold To</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ color: "whitesmoke" }}>
                    <table>
                        <tbody>
                            {result.map((product) => {
                                return (
                                    <tr key={product.ProductName}>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductBrand}</td>
                                        <td>{product.ProductSN}</td>
                                        <td>{product.soldTo}</td>
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