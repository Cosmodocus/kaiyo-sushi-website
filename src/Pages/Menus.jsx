import React from 'react';
import OrderNow from '../Components/OrderNow';
import Menu from '../Components/Menu';
import Banner from '../assets/sushi-banner-3.jpg';
import { HiChevronDoubleDown } from 'react-icons/hi';

const Menus = () => {
	return (
		<>
			<header className='relative'>
				<img
					src={Banner}
					alt='Menu Banner'
					className='w-full h-auto'
				/>
				<div className='absolute inset-0 bg-black opacity-50'></div>
				<div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
					<h1 className='md:text-8xl text-4xl font-bold pb-4 text-center'>
						Explore Our Menus
					</h1>
					<p className='md:text-4xl text-lg md:py-4 animate-bounce'>
						<HiChevronDoubleDown size={70} />
					</p>
				</div>
			</header>
			<Menu />
			<OrderNow />
		</>
	);
};

export default Menus;
