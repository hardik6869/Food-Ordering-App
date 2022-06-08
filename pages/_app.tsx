import Layout from '../components/Layout';
import '../styles/globals.css';
import store from '../redux/store';
import {Provider} from 'react-redux';
import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const MyApp = ({Component, pageProps}): JSX.Element => {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer
                    className="impct-toast"
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    transition={Slide}
                />
            </Layout>
        </Provider>
    );
};
export default MyApp;
