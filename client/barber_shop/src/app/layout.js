import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from './components/Home/Header'; // Import your Header component
// import Footer from './Footer'; // Import your Footer component
import './globals.css'; // Assuming your CSS file is in the styles directory
import Footer from './components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href={inter.cssHref} />
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script>
      </body>
    </html>
  );
}
