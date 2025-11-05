import React from 'react';
import TrendingApp from './TrendingApp';

const TrendingApps = ({ trendingAppsData }) => {

    const allTrendingAppsData = trendingAppsData;
    

    return (
        <div className='text-center grid gap-5 pt-15 p-3 bg-[#F5F5F5]'>
            <h1 className='text-4xl font-bold'>Trending Apps</h1>
            <p className='text-center text-[#627382] font-normal'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid lg:grid-cols-4 gap-3 w-[90%] mx-auto'>
                {
                    allTrendingAppsData.map(individualTrendingAppData => <TrendingApp key={individualTrendingAppData.id}
                    individualTrendingAppData={individualTrendingAppData}
                    ></TrendingApp>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;