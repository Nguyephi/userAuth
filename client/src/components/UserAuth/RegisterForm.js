import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function RegisterForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form onSubmit={(e) => props.asyncAuth(e, { name, email, password })}>
                <input
                    required
                    id='register-name-input'
                    type='text'
                    onChange={(e) => { setName(e.target.value) }}
                    value={name}
                />
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
                <button type='submit'>Register</button>
                <Link to='/login'>login</Link>
            </form>
        </div>
    )
};
