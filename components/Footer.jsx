import Image from 'next/image';
import FooterStyle from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={FooterStyle.container}>
            <div className={FooterStyle.item}>
                <Image
                    src="/../public/assets/bg.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
            <div className={FooterStyle.item}>
                <div className={FooterStyle.card}>
                    <h2 className={FooterStyle.motto}>
                        OH YES, WE DID. THE LAMA PIZZA, WELL BAKED SLICE OF
                        PIZZA.
                    </h2>
                </div>
                <div className={FooterStyle.card}>
                    <h1 className={FooterStyle.title}> FIND OUR RESTAURANTS</h1>
                    <p className={FooterStyle.text}>
                        1654 R. Don Road #304.
                        <br />
                        NewYork,85022
                        <br />
                        (602) 867-1011
                    </p>
                    <p className={FooterStyle.text}>
                        2365 R. Don Road #232.
                        <br />
                        NewYork,85022
                        <br />
                        (602) 867-1012
                    </p>
                    <p className={FooterStyle.text}>
                        1614 R. Don Road #453.
                        <br />
                        NewYork,85022
                        <br />
                        (602) 867-1013
                    </p>
                    <p className={FooterStyle.text}>
                        1614 W. caroll St #745.
                        <br />
                        NewYork,85022
                        <br />
                        (602) 867-1014
                    </p>
                </div>
                <div className={FooterStyle.card}>
                    <h1 className={FooterStyle.title}> WORKING HOURS</h1>
                    <p className={FooterStyle.text}>
                        MONDAY UNTIL FRIDAY <br />
                        9:00 - 22:00
                    </p>
                    <p className={FooterStyle.text}>
                        SATURDAY - SUNDAY <br />
                        12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
