import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const TrendingApp = ({ individualTrendingAppData }) => {

    return (
        <Link to={`/trendingApps/${individualTrendingAppData.id}`}>
            <div className='border border-[#D2D2D2] rounded p-3 grid gap-3 bg-white'>
                <img className='rounded' src={individualTrendingAppData.image} alt="" />
                <h1 className='text-2xl font-bold text-start'>{individualTrendingAppData.title}</h1>
                <div className='flex justify-between'>
                    <span className='flex gap-2 bg-[#F3F3F3] text-green-600 px-3 py-1 rounded-lg'> <Download /> {individualTrendingAppData.downloads} </span>
                    <span className='flex gap-2 bg-[#F3F3F3] text-yellow-500 px-3 py-1 rounded-lg'> <Star /> {individualTrendingAppData.ratingAvg} </span>
                </div>
            </div>
        </Link>

    );
};

export default TrendingApp;