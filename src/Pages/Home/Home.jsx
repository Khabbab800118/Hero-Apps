import React from 'react';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const trendingAppsData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <TrendingApps trendingAppsData={trendingAppsData}></TrendingApps>
        </div>
    );
};

export default Home;