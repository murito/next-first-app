import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import { ActiveLink } from '@/components/active-link/ActiveLink'

export default function Home() {
    return (
        <MainLayout>
            <h1>Contact Page</h1>

            <ActiveLink 
                href='/'
                text='Ir a Home'
                active={ true }
                heading
            />

            <div className='description'>
                <p>
                    Get started by editing&nbsp;
                    <code className='code'>pages/contact.tsx</code>
                </p>
                <div>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className='vercelLogo'
                            width={100}
                            height={24}
                            priority
                        />
                    </a>
                </div>
            </div>
        </MainLayout>
    )
}
