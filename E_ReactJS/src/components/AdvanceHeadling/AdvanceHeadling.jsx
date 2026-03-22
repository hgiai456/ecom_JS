import MainLayout from '@components/Layout/Layout';
import style from './style.module.scss';

function AdvanceHeadling() {
    const { container, headline, des, containerMiddleBox, title } = style;
    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>don't miss super offer</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;
