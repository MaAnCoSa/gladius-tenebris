import { Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OpenLockButton from './openLockButton';
import Pestillo from './pestillo';


const MainLock = () => {
    const [open, setOpen] = useState<boolean>(false);

    const [pestillo1, setPestillo1] = useState<number>(0);
    const [pestillo2, setPestillo2] = useState<number>(0);
    const [pestillo3, setPestillo3] = useState<number>(0);


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
        }
    };

    const revisarCombinacion = () => {
        return (
            pestillo1 == 1
            && pestillo2 == 2
            && pestillo3 == 3
        );
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'blue',
            margin: 'auto 0',
            width: '100%',
            height: '200px'
        }}>
           
            <Pestillo pestillo={1} valPestillo={pestillo1} cambiarPestillo={cambiarPestillo} />
            <Pestillo pestillo={2} valPestillo={pestillo2} cambiarPestillo={cambiarPestillo} />
            <Pestillo pestillo={3} valPestillo={pestillo3} cambiarPestillo={cambiarPestillo} />


            <OpenLockButton open={revisarCombinacion()} />
        </div>
    );
};

export default MainLock;