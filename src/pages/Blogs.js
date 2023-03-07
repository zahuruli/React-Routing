import React from 'react';
import './blogs.css';
import { v4 as uuidv4 } from 'uuid';
import { blogsData } from '../Components/Data/Blogsdata';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const truncate = (trc, num) => {
        if (trc.length > num) {
            return trc.slice(0, num) + ' ... ';
        } else {
            return trc;
        }
    };
    return (
        <div>
            {blogsData.map((blog) => {
                const { id, title, body } = blog;
                return (
                    <article key={uuidv4()} className="article">
                        <h2>{title}</h2>
                        <p>{truncate(body, 100)}</p>
                        <Link to={title} className="Link" state={{ id, title, body }}>
                            Learn More
                        </Link>
                    </article>
                );
            })}
        </div>
    );
};

export default Blogs;
