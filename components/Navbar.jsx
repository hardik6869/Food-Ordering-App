import navbarStyle from '../styles/Navbar.module.css';
import Image from 'next/image';
import {useDispatch, useSelector} from 'react-redux';
import Link from 'next/link';
import {logout} from '../redux/adminSlice';
import {router} from 'next/router';

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const isLogin = useSelector((state) => state.admin);
    return (
        <>
            {isLogin ? (
                <div className={navbarStyle.container}>
                    <div className={navbarStyle.item}>
                        <Link href="/" passHref>
                            <span className={navbarStyle.mlogo}>
                                <i
                                    className={`fa-solid fa-pizza-slice ${navbarStyle.logo}`}>
                                    [̲̅P][̲̅i][̲̅z][̲̅z][̲̅a]
                                </i>
                            </span>
                        </Link>
                    </div>
                    <div className={navbarStyle.item}>
                        <div className={navbarStyle.admin}>Admin Dashboard</div>
                    </div>
                    <ul className={navbarStyle.list}>
                        <Link href="/admin" passHref>
                            <li className={navbarStyle.listItem}>Homepage</li>
                        </Link>

                        <Link href="/" passHref>
                            <li className={navbarStyle.listItem}>Blog</li>
                        </Link>
                    </ul>
                </div>
            ) : (
                <div className={navbarStyle.container}>
                    <div className={navbarStyle.item}>
                        <div className={navbarStyle.callButton}>
                            <Image
                                src="/assets/telephone.png"
                                alt=""
                                width="32"
                                height="32"
                            />
                        </div>
                        <div className={navbarStyle.texts}>
                            <div className={navbarStyle.text}> ORDER NOW! </div>
                            <div className={navbarStyle.text}>012 345 678</div>
                        </div>
                    </div>
                    <div className={navbarStyle.item}>
                        <ul className={navbarStyle.list}>
                            <Link href="/" passHref>
                                <li className={navbarStyle.listItem}>
                                    Homepage
                                </li>
                            </Link>
                            <Link href="/" passHref>
                                <li className={navbarStyle.listItem}>
                                    Products
                                </li>
                            </Link>

                            <span className={navbarStyle.mlogo}>
                                <i
                                    className={`fa-solid fa-pizza-slice ${navbarStyle.logo}`}>
                                    ℙ𝕚𝕫𝕫𝕒
                                </i>
                            </span>

                            <li className={navbarStyle.listItem}> Blog</li>
                            <li className={navbarStyle.listItem}> Contact</li>
                        </ul>
                    </div>
                    <Link href="/cart" passHref>
                        <div className={navbarStyle.item}>
                            <div className={navbarStyle.cart}>
                                <Image
                                    src="/assets/cart.png"
                                    alt=""
                                    width="30px"
                                    height="30px"
                                />
                                <div className={navbarStyle.counter}>
                                    {quantity}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
