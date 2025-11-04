import React from 'react';
import { useLoaderData } from 'react-router';
import App from './App';

const Apps = () => {

    const appsData = useLoaderData();

    return (
        <div className='text-center grid gap-5 pt-15 p-3 bg-[#F5F5F5]'>
            <h1 className='text-4xl font-bold'>Our All Applications</h1>
            <p className='text-center text-[#627382] font-normal'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <h1 className='text-4xl font-bold'>Our Total Applications ({appsData.length}) </h1>
            <div className='grid lg:grid-cols-3 gap-3 w-[90%] mx-auto'>
                {
                    appsData.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;