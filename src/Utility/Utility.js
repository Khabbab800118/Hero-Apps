const getInstalledApps = () => {
    const installedAppsSTR = localStorage.getItem("installed")
    if (installedAppsSTR) {
        const installedAppsData = JSON.parse(installedAppsSTR)
        return installedAppsData;
    }
    else {
        return [];
    }
}

const installedApps = (id) => {

    const installedApps = getInstalledApps()
    if (installedApps.includes(id)) {
        alert('already installed')
    }
    else {
        
        installedApps.push(id)
        const data = JSON.stringify(installedApps)
        localStorage.setItem('installed', data)
    }

}

export { installedApps, getInstalledApps };