import AddStyle from '../styles/Add.module.css';
const AddButton = ({setClose}) => {
    return (
        <div
            onClick={() => {
                setClose(false);
            }}
            className={AddStyle.mainAddButton}>
            Add a New Pizza
        </div>
    );
};

export default AddButton;
