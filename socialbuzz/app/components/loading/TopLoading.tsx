"use client";
import LinearProgress from '@material-ui/core/LinearProgress';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const TopLoading = () => {

    const router = useRouter();
    

    return (
        <div className='top-0 z-50 w-screen fixed'>
            
            <LinearProgress color='secondary' />
            
        </div>
    );
}

export default TopLoading