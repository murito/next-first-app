import { ReactNode } from "react";

interface SecondLayoutProps{
    children: ReactNode | ReactNode[]
};

const SecondLayout = ({ children }: SecondLayoutProps) => {
    return (
        <div style={{
            backgroundColor: '#111',
            borderRadius: '5px',
            width: '80%',
            padding: '50px',
            height: '50vh'
        }}>
            <h3>Second Layout</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '100%'
            }}>
                { children }
            </div>
        </div>
    )
}

export default SecondLayout