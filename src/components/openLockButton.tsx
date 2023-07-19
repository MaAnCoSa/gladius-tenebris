import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import brassTexture from '../images/brass_texture.jpg';

const OpenLockButton : React.FC<{
    open: boolean
}> = (props) => {
    return (
        <div>
        {
            props.open ? (
                <Link to='/2'>
                    <div
                        style={{
                            backgroundImage: `url(${brassTexture})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            color: 'white',
                            width: '50px',
                            height: '100px',
                            boxShadow: 'black -3px 3px',
                            cursor: 'pointer',
                            borderRadius: '100%'
                    }}>
                        
                    </div>
                </Link>
            ) : (
                <div
                    style={{
                        backgroundImage: `url(${brassTexture})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        color: 'white',
                        width: '50px',
                        height: '100px',
                        boxShadow: 'black -3px 3px',
                        cursor: 'pointer',
                        borderRadius: '100%'
                }}>
                            
                </div>
            )
        }
        </div>
    )
};

export default OpenLockButton;