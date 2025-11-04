/* eslint-disable no-irregular-whitespace */
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='grid gap-5 bg-[#F5F5F5] pt-10'>
                <h1 className='text-5xl font-bold text-center'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive Apps</span></h1>
                <p className='text-center text-[#627382] font-normal'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-5'>
                    <a href="https://play.google.com/store/games?hl=en" target='_blank'><button className='flex items-center gap-2 border border-[#D2D2D2] px-5 py-2 rounded'><img src="/src/assets/fi_16076057.png" alt="" />Google Play</button></a>
                    <a href="https://www.apple.com/app-store/" target='_blank'><button className='flex items-center gap-2 border border-[#D2D2D2] px-7 py-2 rounded'><img src="/src/assets/fi_5977575.png" alt="" />App Store</button></a>
                </div>
                <span className='flex justify-center'>
                    <img className='w-[50%]' src="/src/assets/hero.png" alt="" />
                </span>
            </div>
            <div className='grid py-15 gap-10 justify-center text-center text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <h1 className='text-5xl font-bold '>Trusted by Millions, Built for You</h1>
                <div className='lg:flex gap-40'>
                    <div className='grid gap-3'>
                        <span className='text-center font-normal opacity-50 text-sm'>Total Downloads</span>
                        <span className='text-5xl font-bold '>29.6M</span>
                        <span className='text-center font-normal opacity-50'>21% more than last month</span>
                    </div>
                    <div className='grid gap-3'>
                        <span className='text-center font-normal opacity-50'>Total Reviews</span>
                        <span className='text-5xl font-bold '>906K</span>
                        <span className='text-center font-normal opacity-50'>46% more than last month</span>
                    </div>
                    <div className='grid gap-3'>
                        <span className='text-center font-normal opacity-50'>Active Apps</span>
                        <span className='text-5xl font-bold '>132 +</span>
                        <span className='text-center font-normal opacity-50'>31 More Will Launch</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;