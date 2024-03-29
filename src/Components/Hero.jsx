import React from 'react';
import Banner from '../assets/sushi-banner-1.jpg';

const Hero = () => {
	return (
		<header className='relative'>
			<img
				src={Banner}
				alt='Hero Banner'
				className='w-full h-auto'
			/>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
				<h1 className='md:text-8xl text-4xl font-bold pb-4 text-center'>
					Indulge in Authentic Japanese Cuisine
				</h1>
				<p className='md:text-4xl text-lg'>
					The Best Sushi Bar & Restaurant in Canada
				</p>
			</div>
		</header>
	);
};

export default Hero;
