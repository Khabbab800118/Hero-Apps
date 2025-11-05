import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApps, removeInstalledApp } from '../../Utility/Utility';
import InstalledApp from './InstalledApp';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Installation = () => {

    const allAppsData = useLoaderData();
    const [installedApps, setInstalledApps] = useState([]);
    useEffect(() => {
        const installedAppsData = getInstalledApps();
        const convertedInstalledAppsData = installedAppsData.map(id => parseInt(id))
        const myInstalledApps = allAppsData.filter(app => convertedInstalledAppsData.includes(app.id))
        setInstalledApps(myInstalledApps)
    }, [])


    const handleUninstall = (id) => {
        removeInstalledApp(id);
        setInstalledApps(prev => prev.filter(app => app.id !== id));

        MySwal.fire({
            title: "Uninstalled!",
            icon: "success"
        });
    }


    return (
        <div className='text-center grid gap-5 pt-15 p-3 bg-[#F5F5F5]'>
            <h1 className='text-4xl font-bold'>Your Installed Applications</h1>
            <p className='text-center text-[#627382] font-normal'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <h1 className='text-4xl font-bold'>Installed ({installedApps.length}) </h1>
            {
                installedApps.map(app => <InstalledApp key={app.id} app={app} onUninstall={() => handleUninstall(app.id)}></InstalledApp>)
            }
        </div>
    );
};

export default Installation;