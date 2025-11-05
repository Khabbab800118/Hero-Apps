const getInstalledApps = () => {
    const installedAppsSTR = localStorage.getItem("installed");

    if (!installedAppsSTR) return [];

    try {
        const installedAppsData = JSON.parse(installedAppsSTR);
        if (Array.isArray(installedAppsData)) {
            return installedAppsData;
        } else {
            return []; // Not an array, reset it
        }
    } catch (error) {
        console.error("Invalid JSON in localStorage:", error);
        localStorage.removeItem("installed"); // Clear corrupted data
        return [];
    }
};



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

const removeInstalledApp = (id) => {
    const installedApps = getInstalledApps();
    const updatedApps = installedApps.filter(appId => appId !== id)
    localStorage.setItem('installed', updatedApps)
}

export { installedApps, getInstalledApps, removeInstalledApp };