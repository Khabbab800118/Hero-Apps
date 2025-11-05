import { Download, Star, ThumbsUpIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { installedApps } from '../../Utility/Utility';

const AppDetails = () => {

    const allAppData = useLoaderData();
    const { id } = useParams();
    const individualAppId = parseInt(id);
    const singleApp = allAppData.find(app => app.id === individualAppId);
    const [isInstalled, setIsInstalled] = useState(false);
    const handleInstallBtn = (id) => {
        setIsInstalled(true)
        installedApps(id)
    }


    return (
        <div className='bg-[#F3F3F3]'>
            {/* upper part */}
            <div className='lg:flex w-[80%] mx-auto pt-10 border-b border-[#D2D2D2] pb-5'>
                {/* left */}
                <span className='w-[35%] mr-10'><img className='rounded-lg' src={singleApp.image} alt="" /></span>
                {/* right */}
                <div>
                    {/* top */}
                    <div className='border-b border-[#D2D2D2] pb-5'>
                        <h1 className='text-2xl font-bold text-start'>{singleApp.title}</h1>
                        <span className='text-[#627382]'>developed by : {singleApp.companyName}</span>
                    </div>
                    <div className='py-5 grid grid-cols-2 items-center lg:flex gap-20'>
                        <div className='flex-1'>
                            <Download className='text-green-700'></Download>
                            <p className='text-[#627382] my-3'>Downloads</p>
                            <h1 className='text-3xl font-bold text-start'>{singleApp.downloads}</h1>
                        </div>
                        <div className='flex-1'>
                            <Star className='text-yellow-500'></Star>
                            <p className='text-[#627382]'>Average Ratings</p>
                            <h1 className='text-3xl font-bold text-start'>{singleApp.ratingAvg}</h1>
                        </div>
                        <div className='flex-1'>
                            <ThumbsUpIcon></ThumbsUpIcon>
                            <p className='text-[#627382] my-3'>Reviews</p>
                            <h1 className='text-3xl font-bold text-start'>{singleApp.reviews}</h1>
                        </div>
                    </div>
                    {/* install button */}
                    <button onClick={() => handleInstallBtn(id)} disabled={isInstalled} className={`text-white rounded px-5 py-2 ${isInstalled ? 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2]' : 'bg-[#00D390]'}`}>{isInstalled ? "Installed" : "Install"}</button>
                </div>
            </div>
            {/* lower part */}
            <div className='py-5 max-w-[1440px] mx-auto'>
                <h1 className='text-3xl font-bold text-start'>Description</h1>
                <p className='text-[#627382] '>{singleApp.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;

// bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
// bg-[#00D390]