import Head from 'next/head';
import styles from './MainLayout.module.css';
import { Navigation } from '../navigation/Navigation';
import { Inter } from 'next/font/google';
import { FC, ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface MainLayoutProps{
    children: ReactNode | ReactNode[]
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation />

            <main className={`${styles.main} ${inter.className}`}>
                { children }
            </main>
        </>
    )
}

export default MainLayout