import { useEffect, useRef } from 'react';

/**
 * @param {string} message
 * @param {string} type
 * @param {function} close
 * @returns {React.ReactElement}
 */
const Toast = ({ type, message, close }) => {
    const toastRef = useRef(null);
    const className = (type += ' toast-wrapper');

    useEffect(() => {
        setTimeout(fadeOut, 5000);
    }, []);

    const fadeOut = () => {
        if (toastRef.current) {
            toastRef.current.style.opacity = '0';
        }
    };

    return (
        <div className={className} ref={toastRef} onTransitionEnd={close}>
            <span className="toast-close" onClick={fadeOut}>
                &#x2715;
            </span>
            <span>{message}</span>
        </div>
    );
};

export { Toast };
