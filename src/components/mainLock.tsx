import React, { useState } from 'react';
import OpenLockButton from './openLockButton';
import Pestillo from './pestillo';
import brassTexture from '../images/brass_texture.jpg';
import '../stylesheets/lockPage.css';

const MainLock = ({ setOpen }: { setOpen: Function }) => {

    const [pestillo1, setPestillo1] = useState<number>(0);
    const [pestillo2, setPestillo2] = useState<number>(0);
    const [pestillo3, setPestillo3] = useState<number>(0);
    const [pestillo4, setPestillo4] = useState<number>(0);


    const cambiarPestillo = (pestillo: number, inc: number) => {
        switch (pestillo) {
            case 1:
                if (inc == 1) {
                    pestillo1 == 9 ? setPestillo1(0) : setPestillo1(pestillo1 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo1 == 0 ? setPestillo1(9) : setPestillo1(pestillo1 + inc);
                    break;
                } else {
                    break;
                }
            case 2:
                if (inc == 1) {
                    pestillo2 == 9 ? setPestillo2(0) : setPestillo2(pestillo2 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo2 == 0 ? setPestillo2(9) : setPestillo2(pestillo2 + inc);
                    break;
                } else {
                    break;
                }
            case 3:
                if (inc == 1) {
                    pestillo3 == 9 ? setPestillo3(0) : setPestillo3(pestillo3 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo3 == 0 ? setPestillo3(9) : setPestillo3(pestillo3 + inc);
                    break;
                } else {
                    break;
                }
            default:
                break;
            case 4:
                if (inc == 1) {
                    pestillo4 == 9 ? setPestillo4(0) : setPestillo4(pestillo4 + inc);
                    break;
                } else if (inc = -1) {
                    pestillo4 == 0 ? setPestillo4(9) : setPestillo4(pestillo4 + inc);
                    break;
                } else {
                    break;
                }
        }
    };

    const revisarCombinacion = () => {
        const open: boolean =
            pestillo1 == 1
            && pestillo2 == 2
            && pestillo3 == 3
            && pestillo4 == 4;
        open ? setOpen(true) : setOpen(false);
        return open;
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                //backgroundColor: 'blue',
                backgroundImage: `url(${brassTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                margin: 'auto 0',
                padding: '0 10px',
                //marginLeft: '60px',
                width: '300px',
                height: '130px',
                borderRadius: '15px',
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
                borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px',
                boxShadow: 'black -2px 2px 5px'
            }}>

                <div
                    className='lock-button'
                    style={{
                        position: 'absolute',
                        marginRight: '220px',
                        transition: 'transform 0.3s ease 0s',
                }}>
                    <OpenLockButton open={revisarCombinacion} />
                </div>
            
                <Pestillo pestillo={1} valPestillo={pestillo1} cambiarPestillo={cambiarPestillo} />
                <Pestillo pestillo={2} valPestillo={pestillo2} cambiarPestillo={cambiarPestillo} />
                <Pestillo pestillo={3} valPestillo={pestillo3} cambiarPestillo={cambiarPestillo} />
                <Pestillo pestillo={4} valPestillo={pestillo4} cambiarPestillo={cambiarPestillo} />


            </div>

            
        </div>
        
    );
};

export default MainLock;