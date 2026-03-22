import React from 'react';
import MainLayout from '@components/Layout/Layout.jsx';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer.jsx';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner.jsx';
import styles from './style.module.scss';

function HeadlingListProduct() {
    const { container, containerItem } = styles;
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    <CountdownBanner />
                    <div>Count down timer</div>
                    <div className={containerItem}>
                        <div>1</div>
                        <div>2</div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}

export default HeadlingListProduct;
