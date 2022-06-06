import navbarStyle from '../styles/Navbar.module.css';
import Image from 'next/image';
import {useSelector} from 'react-redux';
import Link from 'next/link';

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    const isLogin = useSelector((state) => state.admin);
    const logoutHandler = () => {
        router.push('/');
        dispatch(logout(false));
    };
    return (
        <>
            {isLogin ? (
                <div className={navbarStyle.container}>
                    <div className={navbarStyle.item}>
                        <div className={navbarStyle.texts}>
                            <div className={navbarStyle.text}> ORDER NOW! </div>
                            <div className={navbarStyle.text}>012 345 678</div>
                        </div>
                    </div>
                    <div className={navbarStyle.item}>
                        <ul className={navbarStyle.list}>
                            <Link href="/" passHref>
                                <span className={navbarStyle.mlogo}>
                                    <i
                                        className={`fa-solid fa-pizza-slice ${navbarStyle.logo}`}>
                                        𝔽𝕠𝕠𝕕
                                    </i>
                                </span>
                            </Link>
                        </ul>
                    </div>
                    <div onClick={logoutHandler}>
                        <div className={navbarStyle.item}>
                            <div>Logout</div>
                        </div>
                    </div>
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
                                    𝔽𝕠𝕠𝕕
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
