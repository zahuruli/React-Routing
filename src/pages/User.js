import React from 'react';
import { useSearchParams } from 'react-router-dom';

const User = () => {
    const [searchParams, setSearcParams] = useSearchParams();
    const id = searchParams.get('id');
    const age = searchParams.get('age');
    const name = searchParams.get('name');

    return (
        <div>
            <h1>User</h1>
            <h2>{id}</h2>
            <h2>{age}</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default User;
