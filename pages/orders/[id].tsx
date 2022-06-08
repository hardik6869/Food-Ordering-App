import Image from 'next/image';
import OrderStyle from '../../styles/Order.module.css';
import axios, {AxiosResponse} from 'axios';
import {GetServerSideProps} from 'next';
import {Orders} from '../../interface/Interface';
const Order = ({order}: {order: Orders}): JSX.Element => {
    const status = order.status;
    const statusClass = (index: number): string => {
        if (index - status < 1) return OrderStyle.done;
        if (index - status === 1) return OrderStyle.inProgress;
        if (index - status > 1) return OrderStyle.unDone;
    };
    return (
        <div className={OrderStyle.container}>
            <div className={OrderStyle.left}>
                <div className={OrderStyle.row}>
                    <table className={OrderStyle.table}>
                        <tr className={OrderStyle.trTitle}>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={OrderStyle.tr}>
                            <td>
                                <span className={OrderStyle.id}>
                                    {order._id}
                                </span>
                            </td>
                            <td>
                                <span className={OrderStyle.name}>
                                    {order.customer}
                                </span>
                            </td>
                            <td>
                                <span className={OrderStyle.address}>
                                    {order.address}
                                </span>
                            </td>

                            <td>
                                <span className={OrderStyle.total}>
                                    ₹{order.total}
                                </span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={OrderStyle.row}>
                    <div className={statusClass(0)}>
                        <Image
                            src="/assets/paid.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <span> Payment</span>
                        <div className={OrderStyle.checkedIcon}>
                            <Image
                                src="/assets/checked.png"
                                className={OrderStyle.checkedIcon}
                                height={20}
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image
                            src="/assets/bake.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <span> Preparing</span>
                        <div className={OrderStyle.checkedIcon}>
                            <Image
                                src="/assets/checked.png"
                                className={OrderStyle.checkedIcon}
                                height={20}
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image
                            src="/assets/bike.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <span> On the way</span>
                        <div className={OrderStyle.checkedIcon}>
                            <Image
                                src="/assets/checked.png"
                                className={OrderStyle.checkedIcon}
                                height={20}
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image
                            src="/assets/delivered.png"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <span> Delivered</span>
                        <div className={OrderStyle.checkedIcon}>
                            <Image
                                src="/assets/checked.png"
                                className={OrderStyle.checkedIcon}
                                height={20}
                                width={20}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={OrderStyle.right}>
                <div className={OrderStyle.right}>
                    <div className={OrderStyle.wrapper}>
                        <h2 className={OrderStyle.title}> CARD TOTAL</h2>
                        <div className={OrderStyle.totalText}>
                            <b className={OrderStyle.totalTextTitle}>
                                Subtotal:
                            </b>
                            ₹{order.total}
                        </div>
                        <div className={OrderStyle.totalText}>
                            <b className={OrderStyle.totalTextTitle}>
                                Discount:
                            </b>
                            ₹0.00
                        </div>
                        <div className={OrderStyle.totalText}>
                            <b className={OrderStyle.totalTextTitle}>Total:</b>₹
                            {order.total}
                        </div>
                        <button disabled className={OrderStyle.button}>
                            PAID
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const res: AxiosResponse<Orders> = await axios.get(
        `https://food-ordering-app-one.vercel.app/api/orders/${params.id}`,
    );
    return {
        props: {order: res.data},
    };
};
export default Order;
