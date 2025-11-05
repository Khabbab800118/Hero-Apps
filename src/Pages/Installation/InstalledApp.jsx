import React from 'react';
import { Download, Star } from 'lucide-react';

const InstalledApp = ({ app, onUninstall }) => {

    return (
        <div className='bg-white p-3 rounded-lg lg:flex justify-between items-center mb-2'>
            <div className='lg:flex gap-10'>
                <span className='w-40'><img className='rounded-lg' src={app.image} alt="" /></span>
                <div className='text-start'>
                    <h1 className='text-2xl font-bold mb-3 text-center lg:text-start mt-3 lg:mt-0'>{app.title}</h1>
                    <div className='flex justify-around gap-10 items-center'>
                        <span className='text-green-600'>
                            <Download></Download>
                            {app.downloads}
                        </span>
                        <span className='text-yellow-500'>
                            <Star></Star>
                            {app.ratingAvg}
                        </span>
                        <span>
                            <p>{app.size} MB</p>
                        </span>
                    </div>
                </div>

            </div>
            <button onClick={onUninstall} className='mt-3 lg:mt-0 bg-green-600 px-5 py-2 h-fit text-white rounded'>Uninstall</button>
        </div>

    );
};

export default InstalledApp;