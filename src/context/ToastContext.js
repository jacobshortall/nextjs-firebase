'use client';

import { Toast } from '@/components/global/Toast';
import { useContext, createContext, useState } from 'react';

const ToastContext = createContext();

const ToastContextProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const openToast = (type, message) => {
        const newToast = {
            id: Date.now(),
            message: message,
            type: type
        };
        setToasts((previousToasts) => [...previousToasts, newToast]);
    };

    const closeToast = (id) => {
        setToasts((previousToasts) =>
            previousToasts.filter((toast) => toast.id !== id)
        );
    };

    return (
        <ToastContext.Provider value={{ openToast }}>
            {children}

            <div className="toast-list">
                {toasts.map((toast) => {
                    return (
                        <Toast
                            key={toast.id}
                            type={toast.type}
                            message={toast.message}
                            close={() => closeToast(toast.id)}
                        />
                    );
                })}
            </div>
        </ToastContext.Provider>
    );
};

const useToast = () => useContext(ToastContext);

export { ToastContextProvider, useToast };
