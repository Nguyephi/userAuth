import React from 'react';

export default function AuthContainer(props) {
    console.log('AC', props)
    const asyncAuth = (e, user) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        fetch(`/api/user${props.match.path}`, requestOptions)
            .then(res => {
                if (res.status === 400) {
                    throw res
                }
            })
            .catch(err => {
                err.text().then(message => console.log(message))
            })
    };

    return (
        <div>
            {props.children({ asyncAuth })}
        </div>
    )
};
