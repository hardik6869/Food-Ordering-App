import CartStyle from '../styles/Cart.module.css';
import Image from 'next/image';
import {useDispatch, useSelector} from 'react-redux';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    return (
        <div className={CartStyle.container}>
            <div className={CartStyle.left}>
                <table className={CartStyle.table}>
                    <tr className={CartStyle.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quentity</th>
                        <th>Total</th>
                    </tr>
                    {cart.products.map((product) => (
                        <tr className={CartStyle.tr} key={product._id}>
                            {console.log(product)}
                            <td>
                                <div className={CartStyle.imgContainer}>
                                    <Image
                                        src={product.img}
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={CartStyle.name}>
                                    {product.title}
                                </span>
                            </td>
                            <td>
                                <span className={CartStyle.extra}>
                                    {product.extras.map((extra) => (
                                        <span key={extra._id}>
                                            {console.log(extra)}
                                            {extra.text}
                                        </span>
                                    ))}
                                </span>
                            </td>
                            <td>
                                <span className={CartStyle.price}>
                                    ${product.price}
                                </span>
                            </td>
                            <td>
                                <span className={CartStyle.quantity}>
                                    {product.quantity}
                                </span>
                            </td>
                            <td>
                                <span className={CartStyle.total}>
                                    ${product.price * product.quantity}
                                </span>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={CartStyle.right}>
                <div className={CartStyle.wrapper}>
                    <h2 className={CartStyle.title}> CARD TOTAL</h2>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Subtotal: </b>$
                        {cart.total}
                    </div>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Discount: </b>
                        $0.00
                    </div>
                    <div className={CartStyle.totalText}>
                        <b className={CartStyle.totalTextTitle}> Total: </b>$
                        {cart.total}
                    </div>
                    <button className={CartStyle.button}> CHECKOUT NOW!</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
