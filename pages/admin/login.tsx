import axios from 'axios';
import {useRouter} from 'next/router';
import {useState} from 'react';
import LoginStyle from '../../styles/Login.module.css';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/adminSlice';
import {toast} from 'react-toastify';

const Login = (): JSX.Element => {
    const [username, setUsername] = useState<String>(null);
    const [password, setPassword] = useState<String>(null);
    const [error, setError] = useState<boolean>(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleClick = async (): Promise<void> => {
        try {
            await axios.post('http://localhost:3000/api/login', {
                username,
                password,
            });
            router.push('/admin');
            dispatch(login(true));
            toast.success('Login Successful');
        } catch (error) {
            setError(true);
            toast.error('Login Failed');
        }
    };

    return (
        <div className={LoginStyle.container}>
            <div className={LoginStyle.wrapper}>
                <h1 className={LoginStyle.title}> Admin Dashboard</h1>
                <input
                    placeholder="username"
                    className={LoginStyle.input}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    className={LoginStyle.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick} className={LoginStyle.button}>
                    Sign In
                </button>
                {error && (
                    <span className={LoginStyle.error}>Wrong Credentials!</span>
                )}
            </div>
        </div>
    );
};

export default Login;
