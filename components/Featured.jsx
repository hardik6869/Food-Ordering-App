import featuredStyle from '../styles/Featured.module.css';
import Image from 'next/image';
import {useState} from 'react';

const Featured = () => {
    const [index, setIndex] = useState(0);

    const images = [
        '/assets/featured.jpg',
        '/assets/featured2.jpg',
        '/assets/featured3.jpg',
    ];

    const handleArrow = (direction) => {
        if (direction === 'l') {
            setIndex(index !== 0 ? index - 1 : 2);
        }
        if (direction === 'r') {
            setIndex(index !== 2 ? index + 1 : 0);
        }
    };
    console.log(index);
    return (
        <div className={featuredStyle.container}>
            <div
                className={featuredStyle.arrowContainer}
                style={{left: 0}}
                onClick={() => handleArrow('l')}>
                <Image src="/assets/arrow1.png" alt="" layout="fill" />
            </div>
            <div
                className={featuredStyle.wrapper}
                style={{transform: `translate(${-100 * index}vw)`}}>
                {images.map((img, i) => (
                    <div className={featuredStyle.imgContainer} key={i}>
                        <Image src={img} alt="" layout="fill" />
                    </div>
                ))}
            </div>
            <div
                className={featuredStyle.arrowContainer}
                style={{right: 0}}
                onClick={() => handleArrow('r')}>
                <Image src="/assets/arrow.png" alt="" layout="fill" />
            </div>
        </div>
    );
};

export default Featured;
