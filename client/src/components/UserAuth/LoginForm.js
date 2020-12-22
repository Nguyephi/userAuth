import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form onSubmit={(e) => props.asyncAuth(e, { email, password })}>
                <input
                    required
                    id='register-email-input'
                    type='email'
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                />
                <input
                    required
                    id='register-password-input'
                    type='password'
                    onChange={(e) => { setPassword(e.target.value) }}
                    value={password}
                />
                <button type='submit'>Login</button>
                <Link to='/register'>register</Link>
            </form>
        </div>
    )
};
