export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Here is my nav bar</h1>
                {children}
            </body>
        </html>
    );
}
