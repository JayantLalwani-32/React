import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { userid } = useParams();
    
    return (
        <div className='bg-gray-200 p-4 m-4 text-center text-2xl font-bold'>
            User: {userid}
        </div>
    )
}