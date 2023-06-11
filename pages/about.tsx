import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import SecondLayout from '@/components/layouts/SecondLayout'
import { ReactElement } from 'react'
import { ActiveLink } from '@/components/active-link/ActiveLink'

export function About() {
    return (
        <>
            <h1>About Page</h1>

            <ActiveLink 
                href='/'
                text='Ir a Home'
                active={ true }
                heading
            />

            <div className='description'>
                <p>
                    Get started by editing&nbsp;
                    <code className='code'>pages/about.tsx</code>
                </p>
            </div>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            <SecondLayout>
                { page }
            </SecondLayout>
        </MainLayout>
    );
}

export default About;