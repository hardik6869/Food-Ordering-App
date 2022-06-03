import axios from 'axios';
import {useRouter} from 'next/router';
import {useState} from 'react';
import LoginStyle from '../../styles/Login.module.css';

const Login = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        try {
            await axios.post('http://localhost:3000/api/login', {
                username,
                password,
            });
            router.push('/admin');
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className={LoginStyle.container}>
            <div className={LoginStyle.wrapper}>
                <h1> Admin Dashboard</h1>
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
