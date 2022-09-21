import axios, {AxiosResponse} from 'axios';
import Image from 'next/image';
import {useState} from 'react';
import AdminStyle from '../../styles/Admin.module.css';
import AddButton from '../../components/AddButton';
import Add from '../../components/Add';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/adminSlice';
import {GetServerSideProps} from 'next';
import router from 'next/router';
import {Orders, Products} from '../../interface/Interface';
import {toast} from 'react-toastify';

const Index = ({
    orders,
    products,
    isLogin,
}: {
    orders: any;
    products: Products;
    isLogin: boolean;
}): JSX.Element => {
    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const [close, setClose] = useState<Boolean>(true);
    const status: String[] = ['preparing', 'on the way', 'delivered'];
    const dispatch = useDispatch();
    const handleDelete = async (id: string): Promise<void> => {
        try {
            await axios.delete(`${process.env.BASE_URL}/products/${id}`);
            setProductList(
                productList.filter(
                    (product: {_id: string}) => product._id !== id,
                ),
            );
            toast.success('Product deleted successfully');
        } catch (error) {
            console.log(error);
            toast.error('Product deletion failed');
        }
    };
    dispatch(login(isLogin));
    const handleStatus = async (id: String) => {
        const item = orderList.filter(
            (order: {_id: String}) => order._id === id,
        )[0];
        const currentStatus = item.status;
        if (currentStatus >= 2) {
            return currentStatus;
        }
        try {
            const res: AxiosResponse = await axios.put(
                `${process.env.BASE_URL}/orders/${id}`,
                {status: currentStatus + 1},
            );

            setOrderList([
                res.data,
                ...orderList.filter((order: {_id: String}) => order._id !== id),
            ]);
            toast.success(
                `Order ${id} status changed to ${status[currentStatus + 1]}`,
            );
        } catch (error) {
            console.log(error);
            toast.error(`Order ${id} status change failed`);
        }
    };
    return (
        <>
            {isLogin ? (
                <div className={AdminStyle.container}>
                    <div className={AdminStyle.topBtn}>
                        <AddButton setClose={setClose} />
                    </div>

                    {!close && <Add setClose={setClose} />}
                    <div className={AdminStyle.main}>
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
                                    {productList.map((product: Products) => (
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
                                                <button
                                                    className={
                                                        AdminStyle.button
                                                    }>
                                                    Edit
                                                </button>
                                                <button
                                                    className={
                                                        AdminStyle.button
                                                    }
                                                    onClick={() =>
                                                        handleDelete(
                                                            product._id,
                                                        )
                                                    }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div className={AdminStyle.item}>
                            <h1 className={AdminStyle.title}>Orders</h1>
                            <table className={AdminStyle.table}>
                                <tbody>
                                    <tr className={AdminStyle.trTitle}>
                                        <th>Id</th>
                                        <th>Customer</th>
                                        <th>Total</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    {orderList.map((order: Orders) => (
                                        <tr
                                            className={AdminStyle.trTitle}
                                            key={order._id}>
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
                </div>
            ) : (
                router.push('/admin/login')
            )}
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const myCookie: string = context.req?.cookies.token;
    if (myCookie !== process.env.TOKEN) {
        return {
            redirect: {
                destination: '/admin/login',
                permanent: false,
            },
        };
    }
    let isLogin: Boolean = false;
    const productRes: AxiosResponse<Products> = await axios.get(
        `${process.env.BASE_URL}/products`,
    );
    const orderRes: AxiosResponse<Orders> = await axios.get(
        `${process.env.BASE_URL}/orders`,
    );
    if (myCookie === process.env.TOKEN) {
        isLogin = true;
    }
    return {
        props: {
            orders: orderRes.data,
            products: productRes.data,
            isLogin,
        },
    };
};

export default Index;
