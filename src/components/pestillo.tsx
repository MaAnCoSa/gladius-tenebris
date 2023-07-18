import React from 'react';

const Pestillo = ({ pestillo, valPestillo, cambiarPestillo }: { pestillo: number, valPestillo: number, cambiarPestillo: Function}) => {
    return (
        <div
            className='pesillo'
            style={{
                display: 'block',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgray',
                width: '80px',
                height: '150px',
                padding: 'auto'
        }}>
            <div
                onClick={() => cambiarPestillo(pestillo, 1)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    width: '40px',
                    height: '30px',
                    backgroundColor: 'brown',
                    margin: '10px auto 5px auto',
                    cursor: 'pointer'
            }}>
                +
            </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                width: '50px',
                height: '60px',
                backgroundColor: 'white',
                color: 'black',
                fontSize: '60px'
            }}>
                {valPestillo}
            </div>

            <div
                onClick={() => cambiarPestillo(pestillo, -1)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    width: '40px',
                    height: '30px',
                    backgroundColor: 'brown',
                    margin: '10px auto 5px auto',
                    cursor: 'pointer'
            }}>
                -
            </div>
        </div>
    )
}

export default Pestillo;