import ProductCardStyle from '../styles/ProductCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
const ProductCard = ({product}) => {
    return (
        <div className={ProductCardStyle.container}>
            <Link href={`/product/${product._id}`}>
                <Image src={product.img} alt="" width="500" height="500" />
            </Link>
            <h1 className={ProductCardStyle.title}> {product.title}</h1>
            <span className={ProductCardStyle.price}>${product.prices[0]}</span>
            <p className={ProductCardStyle.desc}>{product.desc}</p>
        </div>
    );
};

export default ProductCard;
