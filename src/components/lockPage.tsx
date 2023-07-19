import React from 'react';
import MainLock from './mainLock';
import journalCover from '../images/journal_cover.jpg';

const LockPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lavender',
                width: '500px',
                height: '750px',
                backgroundImage: `url(${journalCover})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'

        }}>
            <MainLock />
        </div>
        
    );
};

export default LockPage;