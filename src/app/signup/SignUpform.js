'use client';

import { Toast } from '@/components/global/Toast';
import { UserAuth } from '@/context/AuthContext';
import Link from 'next/link';

const SignUpForm = () => {
    const { formSubmitted, signUp, formError } = UserAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signUp(formProps.user, formProps.password);
    };

    return (
        <div>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="user">Username</label>
                    <input id="user" name="user" type="text" />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" />

                    {formSubmitted ? (
                        <button type="submit">
                            <span className="loader"></span>
                        </button>
                    ) : (
                        <button type="submit">Sign up</button>
                    )}
                </form>
            </div>
            <Link href={'/login'}>...or log in</Link>

            <Toast toastState={formError} />
        </div>
    );
};

export default SignUpForm;
