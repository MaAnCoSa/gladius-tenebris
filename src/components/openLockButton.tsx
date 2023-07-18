import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const OpenLockButton : React.FC<{
    open: boolean
}> = (props) => {
    return (
        <div>
        {
            props.open ? (
                <Link to='/2'>
                    <Button
                        variant='contained'
                        style={{
                            backgroundColor: 'black',
                            color: 'white'
                    }}>
                        <b>Página 2</b>
                    </Button>
                </Link>
            ) : (
                <Button
                    variant='contained'
                    style={{
                        backgroundColor: 'black',
                        color: 'white'
                }}>
                    <b>Página 2</b>
                </Button>
            )
        }
        </div>
    )
};

export default OpenLockButton;