import { useEffect } from 'react';

/**
 * @param {string} message
 * @param {string} type
 * @param {function} close
 * @returns {React.ReactElement}
 */
const Toast = ({ type, message, close }) => {
    const className = (type += ' toast-wrapper');

    useEffect(() => {
        setTimeout(close, 5000);
    }, []);

    return (
        <div className={className}>
            <span className="toast-close" onClick={close}>
                &#x2715;
            </span>
            <span>{message}</span>
        </div>
    );
};

export { Toast };
