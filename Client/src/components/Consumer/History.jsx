import { useEffect, useState } from "react";

const History = ({state,addr}) => {
    const [history, setHistory] = useState([]);
    const {contract} = state;
    useEffect(() => {
        const history = async () => {
            try {
                const List = await contract.methods.PurchaseHistory().call({ from: addr });
                console.log(List);
                setHistory(List);
            } catch (error) {
                console.log(error);
            }
        }
        contract && history();
    },[contract]);
    return (
        <>
            <div>
                <div style={{ color: "wheat" }}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Product Name</td>
                                <td>Product Brand</td>
                                <td>Product Saler</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div style={{ color: "whitesmoke" }}>
                    <table>
                        <tbody>
                            {history.map((product) => {
                                return (
                                    <tr key={product.ProductName}>
                                        <td>{product.ProductName}</td>
                                        <td>{product.ProductBrand}</td>
                                        <td>{product.Seller}</td>
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

export default History;