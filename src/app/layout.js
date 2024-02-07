import './global.css';
import NavBar from '../components/NavBar';
import { montserrat } from '../fonts';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`bg-gray-100 ${montserrat.className}`}>
                <NavBar></NavBar>
                {children}
            </body>
        </html>
    );
}
