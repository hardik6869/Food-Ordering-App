import CartStyle from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
    return (
        <div className={CartStyle.container}>
            <div className={CartStyle.left}>
                <table className={CartStyle.table}>
                    <tr className={CartStyle.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quentity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={CartStyle.imgContainer}>
                                <Image
                                    src="/assets/pizza.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={CartStyle.name}> CORALZO</span>
                        </td>
                        <td>
                            <span className={CartStyle.extra}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={CartStyle.price}>$19.99</span>
                        </td>
                        <td>
                            <span className={CartStyle.quantity}>2</span>
                        </td>
                        <td>
                            <span className={CartStyle.total}>$39.80</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={CartStyle.right}>
                <div className={CartStyle.wrapper}>
                    <h2 className={CartStyle.title}> CARD TOTAL</h2>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Subtotal: </b>
                        $79.60
                    </div>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Discount: </b>
                        $0.00
                    </div>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Total: </b>
                        $79.60
                    </div>
                    <button className={CartStyle.button}> CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
