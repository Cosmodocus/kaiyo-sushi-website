import React from 'react';
import UberEats from '../assets/ubereats.jpg';
import SkipTheDish from '../assets/skip.jpg';
import DoorDash from '../assets/doordash.jpg';
import PhoneNotif from '../assets/online-shop.svg';
import Fantuan from '../assets/fantuan.jpg';
import { Link } from 'react-router-dom';

const OrderNow = () => {
	return (
		<div className='bg-[#f7f7f7]  flex flex-col w-full items-center justify-evenly py-8'>
			<div className='flex flex-col gap-4 items-center justify-center '>
				<img
					className=' md:h-[200px] h-[100px]'
					src={PhoneNotif}
					alt=''
				/>
				<h1 className='md:text-4xl text-2xl hover:underline hover:text-red-800'>
					<Link>Click Here to Order Online</Link>
				</h1>
			</div>
			<div className='flex items-center justify-center gap-4 py-4'>
				<img
					className='md:w-[100px] w-[50px]  rounded-xl'
					src={UberEats}
					alt=''
				/>

				<img
					className='md:w-[100px] w-[50px] rounded-xl'
					src={DoorDash}
					alt=''
				/>
				<img
					className='md:w-[100px] w-[50px]   rounded-xl'
					src={SkipTheDish}
					alt=''
				/>
				<img
					className='md:w-[100px] w-[50px]   rounded-xl'
					src={Fantuan}
					alt=''
				/>
			</div>
		</div>
	);
};

export default OrderNow;
