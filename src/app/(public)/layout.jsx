import Navbar from '@/components/Navbar';
import React from 'react';

const PublicLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PublicLayout;