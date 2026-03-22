import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct';
import Info from '@components/Info/Info';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadlingListProduct />
            </div>
        </div>
    );
}

export default HomePage;
