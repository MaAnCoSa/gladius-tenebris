import React, { useState } from 'react';
import MainLock from './mainLock';
import journalCover from '../images/journal_cover.jpg';
import leatherTexture from '../images/leather_texture.jpg';
import brassTexture from '../images/brass_texture.jpg';
import { Link } from 'react-router-dom';

const LockPage = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [strap, setStrap] = useState<boolean>(true);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                backgroundColor: 'lavender',
                width: '500px',
                height: '750px',
                backgroundImage: `url(${journalCover})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '5px'

        }}>
            <MainLock setOpen={setOpen} />

            {
                !open ? (
                    <div
                        className={ open ? 'no-strap' : 'strap'}
                        style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            backgroundImage: `url(${leatherTexture})`,
                            width: '150px',
                            height: '120px',
                            marginLeft: '-70px',
                            marginRight: '-5px',
                            boxShadow: 'black -2px 2px 3px',
                            transition: 'all 0.5s'
                    }}>
                        <div style={{
                            backgroundImage: `url(${brassTexture})`,
                            width: '70px',
                            height: '130px',
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            borderTopRightRadius: '20px',
                            borderBottomRightRadius: '20px',
                            boxShadow: 'black -2px 2px 5px'

                        }}>
                        </div>
                    </div>
                ) : (
                    <div
                        className={ open ? 'no-strap' : 'strap'}
                        style={{
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            //backgroundColor: 'blue',
                            width: '150px',
                            height: '120px',
                            marginLeft: '-70px',
                            marginRight: '-5px',
                            transition: 'all 0.5s'
                    }}>
                        <div style={{
                            backgroundColor: 'black',
                            width: '20px',
                            height: '70px',
                            marginLeft: '15px',
                            borderRadius: '5px',
                            boxShadow: 'inset -2px 2px 5px gray'
                        }} />
                        
                        <div style={{
                            display: 'flex',
                            justifyContent: 'right',
                            alignItems: 'center',
                            width: '150px',
                            height: '80px',
                            //backgroundColor: 'blue',
                            marginRight: '-10px',
                            marginLeft: 'auto'
                        }}>

                            <div
                                className='openLabel'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    //backgroundColor: 'black',
                                    color: 'white',
                                    fontSize: '22px',
                                    width: '80px',
                                    height: '70px',
                                    textShadow: 'black 1px 1px 20px',
                                    userSelect: 'none'
                            }}>
                                <b>OPEN</b>
                            </div>
                                

                            <Link to='/2'>
                                <div
                                    className='openCircle'
                                    style={{
                                        backgroundColor: 'white',
                                        opacity: '65%',
                                        width: '30px',
                                        height: '30px',
                                        borderRadius: '100%',
                                        boxShadow: 'black 0.5px 0.5px 20px',
                                        cursor: 'pointer',
                                        animation: 'openCircleAnim 2s infinite ease'
                                }} />
                            </Link>
                                
                        </div>
                    </div>  
                )
            }

            
        </div>
        
    );
};

export default LockPage;