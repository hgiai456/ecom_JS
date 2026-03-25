import styles from './styles.module.scss';
import React from 'react';
import classNames from 'classnames';

function MyButton({ content, isPrimary = true }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <div>
            <button
                className={classNames(btn, {
                    [primaryBtn]: isPrimary,
                    [secondaryBtn]: !isPrimary
                })}
            >
                {content}
            </button>
        </div>
    );
}

export default MyButton;
