
import React from 'react';

const Container = ({title}) => {
    return (
        <div className="py-8 text-center bg-white">
            <h1 className="text-4xl text-black underline">{title}</h1>
        </div>
    );
};

export default Container;
