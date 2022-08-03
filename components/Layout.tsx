import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({children}: {children: any}): JSX.Element => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
