import { Quicksand  } from 'next/font/google'
import './globals.css'

const inter = Quicksand({ subsets: ['latin'] })

export const metadata = {
    title: 'Wilkinson & Regis | Real Estate Agency',
    description: 'We buy houses and apartment complex.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}