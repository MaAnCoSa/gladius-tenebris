import React from 'react';

const Pestillo = ({ pestillo, valPestillo, cambiarPestillo }: { pestillo: number, valPestillo: number, cambiarPestillo: Function}) => {
    return (
        <div
            className='pestillo'
            style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                //backgroundColor: 'lightgray',
                width: '40px',
                height: '95px',
                padding: 'auto',
                borderRadius: '5px'
        }}>
            <div
                onClick={() => cambiarPestillo(pestillo, 1)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#BC8A5F',
                    width: '20px',
                    height: '15px',
                    fontSize: '20px',
                    //backgroundColor: 'brown',
                    margin: '10px auto 5px auto',
                    cursor: 'pointer',
                    textShadow: '-1px 1px 3px black',
                    userSelect: 'none'
            }}>
                ⮝
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                width: '25px',
                height: '30px',
                backgroundColor: '#E7BC91',
                color: 'black',
                fontSize: '30px',
                boxShadow: 'inset 0 0 5px black',
                userSelect: 'none'
            }}>
                {valPestillo}
            </div>
            

            <div
                onClick={() => cambiarPestillo(pestillo, -1)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#BC8A5F',
                    width: '20px',
                    height: '15px',
                    fontSize: '20px',
                    //backgroundColor: 'brown',
                    margin: '5px auto 10px auto',
                    cursor: 'pointer',
                    textShadow: '-1px 1px 3px black',
                    userSelect: 'none'
            }}>
                ⮟
            </div>
        </div>
    )
}

export default Pestillo;