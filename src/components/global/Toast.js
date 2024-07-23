import { useEffect, useState } from 'react';

/**
 *
 * @param {array} toastState
 * @returns {React.ReactElement}
 */
const Toast = ({ toastState }) => {
    let [type, message] = toastState;
    let [toastVisible, setToastVisible] = useState(false);
    const className = (type += ' toast-wrapper');

    useEffect(() => {
        if (toastState) {
            setToastVisible(true);

            setTimeout(() => {
                setToastVisible(false);
            }, 3000);
        }
    }, [toastState]);

    if (!type || !message) return;

    return (
        <div className={className} data-visible={toastVisible}>
            <span>{message}</span>
        </div>
    );
};

export { Toast };
