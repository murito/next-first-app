import { useRouter } from 'next/router';
import { ActiveLink } from '../active-link/ActiveLink';
import styles from './Navigation.module.scss';

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navigation = () => {
    const { asPath } = useRouter();

    return (
        <nav className={ styles['navigation-main'] }>
            {menuItems.map(({href, text }) => 
                <ActiveLink key={ href } href={ href } text={ text } active={ asPath === href }/>
            )}
        </nav>
    )
}
