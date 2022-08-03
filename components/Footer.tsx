import Image from 'next/image';
import FooterStyle from '../styles/Footer.module.css';

const Footer = (): JSX.Element => {
    return (
        <div className={FooterStyle.container}>
            <div className={FooterStyle.item}>
                <Image
                    src="/assets/bg.png"
                    className={FooterStyle.img}
                    height={100}
                    width={350}
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
                        India,85022
                        <br />
                        (+91) 86712 21011
                    </p>
                    <p className={FooterStyle.text}>
                        2365 R. Don Road #232.
                        <br />
                        India,85022
                        <br />
                        (+91) 86722 21012
                    </p>
                    <p className={FooterStyle.text}>
                        1614 R. Don Road #453.
                        <br />
                        India,85022
                        <br />
                        (+91) 86712 51013
                    </p>
                    <p className={FooterStyle.text}>
                        1614 W. caroll St #745.
                        <br />
                        India,85022
                        <br />
                        (+91) 86779 61014
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
