import axios from 'axios';
import {useState} from 'react';
import AddStyle from '../styles/Add.module.css';

const Add = ({setClose}) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extra, setExtra] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;
        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]: e.target.value});
    };
    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
    };

    const handleCreate = async () => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'uploads');
        try {
            const uploadRes = await axios.post(
                'https://api.cloudinary.com/v1_1/dbywuuxau/image/upload',
                data,
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={AddStyle.container}>
            <div className={AddStyle.wrapper}>
                <span onClick={() => setClose(true)} className={AddStyle.close}>
                    X
                </span>
                <h1 className={AddStyle.item}>Add a New Pizza </h1>
                <div className={AddStyle.item}>
                    <label className={AddStyle.label}> Choose a Image</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className={AddStyle.item}>
                    <label className={AddStyle.label}>Title</label>
                    <input
                        className={AddStyle.input}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={AddStyle.item}>
                    <label className={AddStyle.label}>Desc</label>
                    <textarea
                        rows={4}
                        type="text"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </div>
                <div className={AddStyle.item}>
                    <label className={AddStyle.label}>Prices</label>
                    <div className={AddStyle.priceContainer}>
                        <input
                            className={`${AddStyle.input} ${AddStyle.inputSm}`}
                            type="number"
                            placeholder="Small"
                            onChange={(e) => changePrice(e, 0)}
                        />
                        <input
                            className={`${AddStyle.input} ${AddStyle.inputSm}`}
                            type="number"
                            placeholder="Medium"
                            onChange={(e) => changePrice(e, 1)}
                        />
                        <input
                            className={`${AddStyle.input} ${AddStyle.inputSm}`}
                            type="number"
                            placeholder="Large"
                            onChange={(e) => changePrice(e, 2)}
                        />
                    </div>
                </div>
                <div className={AddStyle.item}>
                    <label className={AddStyle.label}>Extra</label>
                    <div className={AddStyle.extra}>
                        <input
                            className={`${AddStyle.input} ${AddStyle.inputSm}`}
                            type="text"
                            placeholder="Item"
                            name="text"
                            onChange={handleExtraInput}
                        />
                        <input
                            className={`${AddStyle.input} ${AddStyle.inputSm}`}
                            type="number"
                            placeholder="Price"
                            name="price"
                            onChange={handleExtraInput}
                        />
                        <button
                            className={AddStyle.extraButton}
                            onClick={handleExtra}>
                            Add
                        </button>
                    </div>
                    <div className={AddStyle.extraItems}>
                        {extraOptions.map((option) => (
                            <span
                                key={option.text}
                                className={AddStyle.extraItem}>
                                {option.text}
                            </span>
                        ))}
                    </div>
                </div>
                <button className={AddStyle.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default Add;
