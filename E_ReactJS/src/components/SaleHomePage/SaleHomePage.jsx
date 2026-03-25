import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import MyButton from '@components/Button/MyButton';
import useTranslateX from './translateXImage';

function SaleHomePage() {
    const { container, title, des, boxBtn, boxImg } = styles;
    const { translateXPosition } = useTranslateX();

    return (
        <div className={container}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-18.1-min.jpg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Don't miss out on our biggest sale of the year!
                </p>
                <div className={boxBtn}>
                    <MyButton content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 0.6s ease'
                }}
            >
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min.jpg'
                    alt=''
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
