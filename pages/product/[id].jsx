import Image from 'next/image';
import ProductStyle from '../../styles/Product.module.css';
import {useState} from 'react';
import axios from 'axios';

const Product = ({product}) => {
    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);

    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        const difference = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };
    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.price);
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    };
    return (
        <div className={ProductStyle.container}>
            <div className={ProductStyle.left}>
                <div className={ProductStyle.imgContainer}>
                    <Image
                        src={product.img}
                        objectFit="contain"
                        layout="fill"
                        alt=""
                    />
                </div>
            </div>

            <div className={ProductStyle.right}>
                <h1 className={ProductStyle.title}> {product.title}</h1>
                <span className={ProductStyle.price}>${price}</span>
                <p className={ProductStyle.desc}> {product.desc}</p>
                <h3 className={ProductStyle.choose}> Choose the size</h3>

                <div className={ProductStyle.sizes}>
                    <div
                        className={ProductStyle.size}
                        onClick={() => handleSize(0)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Small</span>
                    </div>
                    <div
                        className={ProductStyle.size}
                        onClick={() => handleSize(1)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Medium</span>
                    </div>
                    <div
                        className={ProductStyle.size}
                        onClick={() => handleSize(2)}>
                        <Image src="/assets/size.png" alt="" layout="fill" />
                        <span className={ProductStyle.number}> Large</span>
                    </div>
                </div>
                <h3 className={ProductStyle.choose}>
                    Choose Additional Ingredients.
                </h3>
                <div className={ProductStyle.ingredients}>
                    {product.extraOptions.map((option) => (
                        <div className={ProductStyle.option} key={option.id}>
                            <input
                                type="checkbox"
                                id={option.text}
                                name={option.text}
                                className={ProductStyle.checkbox}
                                onChange={(e) => handleChange(e, option)}
                            />
                            <label htmlFor="double">{option.text}</label>
                        </div>
                    ))}
                </div>
                <div className={ProductStyle.add}>
                    <input
                        type="number"
                        onChange={(e) => setQuantity(e.target.value)}
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

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(
        `http://localhost:3000/api/products/${params.id}`,
    );
    return {
        props: {
            product: res.data,
        },
    };
};
