import { Quicksand  } from 'next/font/google'
import './globals.css'

const inter = Quicksand({ subsets: ['latin'] });
const myApi = process.env.NEXT_PUBLIC_VERCEL_MAPS_API_KEY;

export const metadata = {
    title: 'Wilkinson & Regis | Real Estate Agency',
    description: 'We buy houses and apartment complex.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <script
                    type="text/javascript"
                    defer
                    src={`https://maps.googleapis.com/maps/api/js?key=${myApi}&libraries=places`}
                ></script>

            </body>
        </html>
    );
}