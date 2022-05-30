import Image from 'next/image';
import OrderStyle from '../../styles/Order.module.css';
const Order = () => {
    const status = 0;
    const statusClass = (index) => {
        if (index - status < 1) return OrderStyle.done;
        if (index - status === 1) return OrderStyle.inProgress;
        if (index - status > 1) return OrderStyle.unDone;
    };
    return (
        <div className={OrderStyle.container}>
            <div className={OrderStyle.left}>
                <div className={OrderStyle.row}>
                    <table className={OrderStyle.table}>
                        <tr className={OrderStyle.tr}>
                            <th>Product</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>
                                <span className={OrderStyle.id}>
                                    34564564675345
                                </span>
                            </td>
                            <td>
                                <span className={OrderStyle.name}>
                                    Jhon Doe
                                </span>
                            </td>
                            <td>
                                <span className={OrderStyle.address}>
                                    Elton st. 212-33 LA
                                </span>
                            </td>

                            <td>
                                <span className={OrderStyle.total}>$79.80</span>
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
                            $79.60
                        </div>
                        <div className={OrderStyle.totalText}>
                            <b className={OrderStyle.totalTextTitle}>
                                Discount:
                            </b>
                            $0.00
                        </div>
                        <div className={OrderStyle.totalText}>
                            <b className={OrderStyle.totalTextTitle}>Total:</b>
                            $79.60
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

export default Order;
