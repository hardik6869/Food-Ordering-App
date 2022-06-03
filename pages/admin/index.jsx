import axios from 'axios';
import Image from 'next/image';
import {useState} from 'react';
import AdminStyle from '../../styles/Admin.module.css';

const Index = ({orders, products}) => {
    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ['preparing', 'on the way', 'delivered'];
    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(
                'http://localhost:3000/api/products/' + id,
            );
            setProductList(productList.filter((product) => product._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    const handleStatus = async (id) => {
        const item = orderList.filter((order) => order._id === id)[0];
        const currentStatus = item.status;
        try {
            const res = await axios.put(
                `http://localhost:3000/api/orders/${id}`,
                {status: currentStatus + 1},
            );
            setOrderList([
                res.data,
                ...orderList.filter((order) => order._id !== id),
            ]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={AdminStyle.container}>
            <div className={AdminStyle.item}>
                <h1 className={AdminStyle.title}>Products</h1>
                <table className={AdminStyle.table}>
                    <tbody>
                        <tr className={AdminStyle.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {productList.map((product) => (
                            <tr
                                className={AdminStyle.trTitle}
                                key={product._id}>
                                <td>
                                    <Image
                                        src={product.img}
                                        width={50}
                                        height={50}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{product._id.slice(0.5)}...</td>
                                <td> {product.title} </td>
                                <td>₹{product.prices[0]}</td>
                                <td>
                                    <button className={AdminStyle.button}>
                                        Edit
                                    </button>
                                    <button
                                        className={AdminStyle.button}
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={AdminStyle.item}>
                <h1 className={AdminStyle.title}>Orders</h1>
                <table className={AdminStyle.table}>
                    <tbody>
                        <tr className={AdminStyle.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>status</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {orderList.map((order) => (
                            <tr className={AdminStyle.trTitle} key={order._id}>
                                <td>{order._id.slice(0.5)}...</td>
                                <td>{order.customer}</td>
                                <td>₹{order.total}</td>
                                <td>
                                    {order.method === 0 ? (
                                        <span>Cash</span>
                                    ) : (
                                        <span>Paid</span>
                                    )}
                                </td>
                                <td>{status[order.status]}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            handleStatus(order._id);
                                        }}>
                                        Next Stage
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export const getServerSideProps = async (context) => {
    const myCookie = context.req?.cookies || '';
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        };
    }
    const productRes = await axios.get('http://localhost:3000/api/products');
    const orderRes = await axios.get('http://localhost:3000/api/orders');
    return {
        props: {
            orders: orderRes.data,
            products: productRes.data,
        },
    };
};

export default Index;
