'use client';

import { UserAuth } from '@/context/AuthContext';
import Link from 'next/link';

import '../globals.css';

const SignUpForm = () => {
    const { user, userLoading, formSubmitted, signUp } = UserAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        const formProps = Object.fromEntries(data);

        signUp(formProps.user, formProps.password);
    };

    if (userLoading) {
        return (
            <div>
                <span className="loader"></span>
            </div>
        );
    }

    if (user) {
        return (
            <div>
                <span>You already have an account.</span>
            </div>
        );
    }

    return (
        <div>
            <h1>Sign Up</h1>

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

            <span className="error"></span>
        </div>
    );
};

export default SignUpForm;
