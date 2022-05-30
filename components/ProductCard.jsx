import ProductCardStyle from '../styles/ProductCard.module.css';
import Image from 'next/image';
const ProductCard = () => {
    return (
        <div className={ProductCardStyle.container}>
            <Image
                src="/../public/assets/pizza.png"
                alt=""
                width="200"
                height="200"
            />
            <h1 className={ProductCardStyle.title}> FIORI DI ZUCCA</h1>
            <span className={ProductCardStyle.price}> $19.00 </span>
            <p className={ProductCardStyle.desc}>
                Lorem ipsum dolor sit amet consectetur adipiscing elite.
            </p>
        </div>
    );
};

export default ProductCard;
