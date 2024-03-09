import React from 'react';
import KaiyoMap from '../assets/kaiyo-location.png';
import PhoneIcon from '../assets/phone.png';

const Location = () => {
	return (
		<div className=' flex flex-col md:flex-row items-center justify-evenly gap-4 w-full  md:py-12 py-4'>
			<div className='flex flex-col text-left justify-center md:gap-4 gap-2 '>
				<h2 className='text-4xl md:text-6xl font-semibold'>Location</h2>
				<p className='text-2xl md:text-2xl'>9325 Yonge St</p>
				<p className='text-2xl md:text-2xl'>Richmond Hill, ON</p>
				<p className='text-2xl md:text-2xl'>L4C 0A8</p>
				<p className='text-2xl md:text-2xl font-bold flex items-center'>
					<img
						className='w-[30px]'
						src={PhoneIcon}
						alt=''
					/>{' '}
					905-737-7888
				</p>
			</div>
			<div className='md:flex-shrink-0'>
				<img
					className='h-auto md:max-w-md  max-w-xs rounded-md'
					src={KaiyoMap}
					alt='Kaiyo Map'
				/>
			</div>
		</div>
	);
};

export default Location;
