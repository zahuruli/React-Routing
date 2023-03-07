import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Blog from '../pages/Blog';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Error from '../pages/Error';
import Home from '../pages/Home';
import User from '../pages/User';

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/user" element={<User />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
