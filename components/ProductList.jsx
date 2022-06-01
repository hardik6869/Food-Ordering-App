import ProductListStyle from '../styles/ProductList.module.css';
import ProductCard from './ProductCard';

const ProductList = ({productList}) => {
    return (
        <div className={ProductListStyle.container}>
            <h1 className={ProductListStyle.title}> THE BEST PIZZA IN TOWN</h1>
            <p className={ProductListStyle.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                blandit arcu in pretium molestie. Interdum et malesuada fames
                acme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={ProductListStyle.wrapper}>
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
