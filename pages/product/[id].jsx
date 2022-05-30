import Image from 'next/image';
import ProductStyle from '../../styles/Product.module.css';
import {useState} from 'react';

const Product = () => {
    const [size, setSize] = useState(0);
    const product = {
        id: '1',
        name: 'CAMPANGNOLA',
        img: '/assets/pizza.png',
        price: [19.9, 93.9, 27.9],
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utblandit arcu in pretium molestie. Interdum et malesuada famesacme. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    return (
        <div className={ProductStyle.container}>
            <div className={ProductStyle.left}>
                <div className={ProductStyle.imgContainer}>
                    <Image src={product.img} layout="fill" alt="" />
                </div>
            </div>

            <div className={ProductStyle.right}>
                <h1 className={ProductStyle.title}> {product.name}</h1>
                <span className={ProductStyle.price}>
                    ${product.price[size]}
                </span>
                <p className={ProductStyle.desc}> {product.desc}</p>
                <h3 className={ProductStyle.choose}> Choose the size</h3>

                <div className={ProductStyle.sizes}>
                    <div
                        className={ProductStyle.size}
                        onClick={() => setSize(0)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Small</span>
                    </div>
                    <div
                        className={ProductStyle.size}
                        onClick={() => setSize(1)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Medium</span>
                    </div>
                    <div
                        className={ProductStyle.size}
                        onClick={() => setSize(2)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Large</span>
                    </div>
                </div>
                <h3 className={ProductStyle.choose}>
                    Choose Additional Ingredients.
                </h3>
                <div className={ProductStyle.ingredients}>
                    <div className={ProductStyle.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={ProductStyle.checkbox}
                        />
                        <label htmlFor="double"> Double Ingredients</label>
                    </div>

                    <div className={ProductStyle.option}>
                        <input
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            className={ProductStyle.checkbox}
                        />
                        <label htmlFor="cheese"> Extra Cheese </label>
                    </div>

                    <div className={ProductStyle.option}>
                        <input
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            className={ProductStyle.checkbox}
                        />
                        <label htmlFor="spicy"> Spicy sauce</label>
                    </div>

                    <div className={ProductStyle.option}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className={ProductStyle.checkbox}
                        />
                        <label htmlFor="garlic"> Garlic sauce</label>
                    </div>
                </div>
                <div className={ProductStyle.add}>
                    <input
                        type="number"
                        defaultValue={1}
                        className={ProductStyle.quantity}
                    />
                    <button className={ProductStyle.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
