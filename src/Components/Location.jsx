import React from 'react';
import KaiyoMap from '../assets/kaiyo-location.png';

const Location = () => {
	return (
		<div className='flex flex-col md:flex-row items-center justify-evenly gap-4 w-full py-12'>
			<div className='flex flex-col text-left justify-center gap-8 '>
				<h2 className='text-4xl md:text-6xl font-semibold'>Location</h2>
				<p className='text-2xl md:text-2xl'>9325 Yonge St</p>
				<p className='text-2xl md:text-2xl'>Richmond Hill, ON</p>
				<p className='text-2xl md:text-2xl'>L4C 0A8</p>
			</div>
			<div className='md:flex-shrink-0'>
				<img
					className='h-auto max-w-md rounded-md'
					src={KaiyoMap}
					alt='Kaiyo Map'
				/>
			</div>
		</div>
	);
};

export default Location;
