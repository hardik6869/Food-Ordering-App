import navbarStyle from '../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
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
                    <div className={navbarStyle.text}> 012 345 678 </div>
                </div>
            </div>
            <div className={navbarStyle.item}>
                <ul className={navbarStyle.list}>
                    <li className={navbarStyle.listItem}> Homepage</li>
                    <li className={navbarStyle.listItem}> Products</li>
                    <li className={navbarStyle.listItem}> Menu</li>
                    <span className={navbarStyle.mlogo}>
                        <i
                            className={`fa-solid fa-pizza-slice ${navbarStyle.logo}`}>
                            𝔽𝕠𝕠𝕕
                        </i>
                    </span>
                    <li className={navbarStyle.listItem}> Events</li>
                    <li className={navbarStyle.listItem}> Blog</li>
                    <li className={navbarStyle.listItem}> Contact</li>
                </ul>
            </div>
            <div className={navbarStyle.item}>
                <div className={navbarStyle.cart}>
                    <Image
                        src="/assets/cart.png"
                        alt=""
                        width="30px"
                        height="30px"
                    />
                    <div className={navbarStyle.counter}>2</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
