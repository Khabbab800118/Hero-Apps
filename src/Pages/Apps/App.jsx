import { Download, Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const App = ({ app }) => {
    const individualApp = app
    console.log(individualApp);

    return (
        <Link to={`/apps/${individualApp.id}`}>
            <div className='border border-[#D2D2D2] rounded p-3 grid gap-3 bg-white'>
                <img className='rounded' src={individualApp.image} alt="" />
                <h1 className='text-2xl font-bold text-start'>{individualApp.title}</h1>
                <div className='flex justify-between'>
                    <span className='flex gap-2 bg-[#F3F3F3] text-green-600 px-3 py-1 rounded-lg'> <Download /> {individualApp.downloads} </span>
                    <span className='flex gap-2 bg-[#F3F3F3] text-yellow-500 px-3 py-1 rounded-lg'> <Star /> {individualApp.ratingAvg} </span>
                </div>
            </div>
        </Link>
    );
};

export default App;