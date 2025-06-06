import BoxIcon from './BoxIcon/BoxIcon';
import styles from './styles.module.scss';
import { dataBoxIcon, dataMenu } from './constants';
import Menu from './Menu/Menu';
import Logo from '@icons/images/logoxoaphong.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerBox,
        containerHeader,
        container
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                        {/* slice(vị trí 0 đến 3) => Chỉ in vị trí thứ 0 đến 3 */}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='Logo'
                        style={{ width: '140px', height: '145px' }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                        {/* slice(vị trí 0 đến 3) => Chỉ in vị trí thứ 0 đến 3 */}
                    </div>
                    <div className={containerBoxIcon}>
                        <img
                            width={26}
                            height={26}
                            src={reloadIcon}
                            alt='reloadIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={heartIcon}
                            alt='heartIcon'
                        />
                        <img
                            width={26}
                            height={26}
                            src={cartIcon}
                            alt='cartIcon'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
