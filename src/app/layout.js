import './global.css';
import NavBar from '../components/NavBar';
import { montserrat } from './fonts';

export const metadata = {
    title: 'Dev Store',
    description: 'You can shop coding shirts',
    keywords: ['coding shirts', 'coding'],
};
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
