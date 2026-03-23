import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import Info from '@components/Info/Info';
import { getProduct } from '@apis/productService';

import { useState, useEffect } from 'react';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
    const [listProducts, setListProducts] = useState([]);

    const { container } = styles;
    useEffect(() => {
        getProduct().then((res) => {
            setListProducts(res.contents); //Lưu dữ liệu vào state bằng useState
        });
    }, []);

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct data={listProducts.slice(0, 2)} />
                <PopularProduct data={listProducts.slice(2, 10)} />
            </div>
        </div>
    );
}

export default HomePage;
