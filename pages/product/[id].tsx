import Image from 'next/image';
import ProductStyle from '../../styles/Product.module.css';
import {ChangeEvent, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useDispatch} from 'react-redux';
import {addProduct} from '../../redux/cartSlice';
import {GetServerSideProps} from 'next';
import {Products} from '../../interface/Interface';
import {ProdOption} from '../../interface/Interface';

const Product = ({product}: {product: Products}): JSX.Element => {
    const [price, setPrice] = useState(product.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number: number): void => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex: number): void => {
        const difference = product.prices[sizeIndex] - product.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    };
    const handleChange = (
        e: ChangeEvent<HTMLInputElement>,
        option: {price: number; _id: string},
    ): void => {
        const checked = e.target.checked;
        if (checked) {
            changePrice(option.price);
            setExtras((prev) => [...prev, option]);
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra) => extra._id !== option._id));
        }
    };
    const handleClick = (): void => {
        dispatch(addProduct({...product, extras, price, quantity}));
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
                <span className={ProductStyle.price}>₹{price}</span>
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
                    {product.extraOptions.map((option: ProdOption) => (
                        <div className={ProductStyle.option} key={option._id}>
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
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        defaultValue={1}
                        className={ProductStyle.quantity}
                    />
                    <button
                        className={ProductStyle.button}
                        onClick={handleClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    const res: AxiosResponse<Products> = await axios.get(
        `${process.env.BASE_URL}/products/${params.id}`,
    );
    return {
        props: {
            product: res.data,
        },
    };
};
