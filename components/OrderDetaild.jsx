import {useState} from 'react';
import OrderDetailStyle from '../styles/OrderDetail.module.css';

const OrderDetaild = ({total, createOrder}) => {
    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const handleClick = () => {
        createOrder({customer, address, total, method: 0});
    };
    return (
        <div className={OrderDetailStyle.container}>
            <div className={OrderDetailStyle.wrapper}>
                <h1 className={OrderDetailStyle.title}>
                    You will pay $12 after delivery.
                </h1>
                <div className={OrderDetailStyle.item}>
                    <label className={OrderDetailStyle.label}>
                        Name Surname
                    </label>
                    <input
                        placeholder="John Doe"
                        type="text"
                        className={OrderDetailStyle.input}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={OrderDetailStyle.item}>
                    <label className={OrderDetailStyle.label}>
                        Phone Number
                    </label>
                    <input
                        type="text"
                        placeholder="+1 234 567 89"
                        className={OrderDetailStyle.input}
                    />
                </div>
                <div className={OrderDetailStyle.item}>
                    <label className={OrderDetailStyle.label}>Address</label>
                    <textarea
                        rows={5}
                        placeholder="Elton St. 505 NY"
                        type="text"
                        className={OrderDetailStyle.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button
                    className={OrderDetailStyle.button}
                    onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default OrderDetaild;
