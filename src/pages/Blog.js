import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { blogsData } from '../Components/Data/Blogsdata';

const Blog = () => {
    const { title } = useParams();
    const location = useLocation();

    return (
        <div>
            <h2>{title}</h2>
            <p>{location.state.body}</p>
        </div>
    );
};

export default Blog;
