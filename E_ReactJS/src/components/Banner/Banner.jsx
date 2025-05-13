import styles from './styles.module.scss';
import MyButton from '@components/Button/MyButton';

function Banner() {
    const { container, content, title } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>HG Shoes</h1>
                <div>Content ...</div>
                <MyButton content={'Go to shop'} />
            </div>
        </div>
    );
}

export default Banner;
