import Link from 'next/link'
import React, { FC } from 'react'

import styles from  './ActiveLink.module.scss';

interface ActiveLinkProps{
    href: string;
    text: string;
    active: boolean;
    heading?: boolean;
}

export const ActiveLink:FC<ActiveLinkProps> = ({ href, text, active, heading }) => {
    return (
        <Link 
            className={ `
                ${ styles['custom-link'] } 
                ${ heading ? styles['heading'] : '' }
                ${ active ? styles['active-link'] : '' }
            ` }
            href={ href }
        >
            { text }
        </Link>
    )
}
