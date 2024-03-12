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
					<Link
						to={'https://gosnappy.io/owa/snappy/detail/G2441/2441/m/menu_892'}
						target='_blank'
					>
						Click Here to Order Online
					</Link>
				</h1>
			</div>
			<div className='flex items-center justify-center gap-4 py-4 animate-pulse'>
				<Link
					target='_blank'
					to={
						'https://www.ubereats.com/ca/store/kaiyo-sushi/KXhdzWJyWJKPsNiFhZyZaQ'
					}
				>
					<img
						className='md:w-[100px] w-[50px]  rounded-xl cursor-pointer'
						src={UberEats}
						alt=''
					/>
				</Link>

				<Link
					target='_blank'
					to={
						'https://www.doordash.com/store/kaiyo-sushi-richmond-hill-23097715/'
					}
				>
					<img
						className='md:w-[100px] w-[50px] rounded-xl cursor-pointer'
						src={DoorDash}
						alt=''
					/>
				</Link>

				<Link
					target='_blank'
					to={'https://www.skipthedishes.com/fr/kaiyo-sushi-9325'}
				>
					<img
						className='md:w-[100px] w-[50px]   rounded-xl cursor-pointer'
						src={SkipTheDish}
						alt=''
					/>
				</Link>

				<Link
					target='_blank'
					to={'https://www.fantuanorder.com/store/kaiyo-sushi/ca-12558'}
				>
					<img
						className='md:w-[100px] w-[50px]   rounded-xl cursor-pointer'
						src={Fantuan}
						alt=''
					/>
				</Link>
			</div>
		</div>
	);
};

export default OrderNow;
