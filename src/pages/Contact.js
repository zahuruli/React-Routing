import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Wellcome to Contact Page</h1>
            <br />
            <h2>Zahurul Islam</h2>
            <h4>Begum Rokeya University Rangpur</h4>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
    );
};

export default Contact;
