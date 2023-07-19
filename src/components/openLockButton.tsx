import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import brassTexture from '../images/brass_texture.jpg';

const OpenLockButton : React.FC<{
    open: Function
}> = (props) => {

    const handleClick = () => {
        props.open();
    }

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundImage: `url(${brassTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                color: 'white',
                width: '50px',
                height: '100px',
                boxShadow: 'black -3px 3px 2px',
                cursor: 'pointer',
                border: 'none',
                padding: 'none',
                borderRadius: '100%'
        }}>
            
        </button>
    )
};

export default OpenLockButton;