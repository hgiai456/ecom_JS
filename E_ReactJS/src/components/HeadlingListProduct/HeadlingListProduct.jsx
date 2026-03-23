import React from 'react';
import MainLayout from '@components/Layout/Layout.jsx';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner.jsx';
import styles from './style.module.scss';
import ProductItem from '@components/ProductItem/ProductItem.jsx';

function HeadlingListProduct({ data }) {
    const { container, containerItem } = styles;
    console.log(data);
    return (
        <div>
            <MainLayout>
                <div className={container}>
                    <CountdownBanner />
                    <div className={containerItem}>
                        {data.map((item, index) => (
                            <ProductItem
                                key={item.id}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}

export default HeadlingListProduct;
