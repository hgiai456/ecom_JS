import React from 'react';
import styles from './styles.module.scss';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import MyButton from '@components/Button/MyButton';

function CountdownBanner() {
    const targetDate = '2026-12-31T23:59:59';
    const { container, containerTimer, title, boxBtn } = styles;
    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback!</p>
            <div className={boxBtn}>
                <MyButton content={'Buy Now'} />
            </div>
        </div>
    );
}

export default CountdownBanner;
