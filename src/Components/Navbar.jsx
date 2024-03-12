import React from 'react';
import { Link } from 'react-router-dom';
import KaiyoLogo from '../assets/kaiyo-sushi-logo.jpg';

const Navbar = () => {
	return (
		<nav className='w-full  flex flex-col items-center justify-between  '>
			<img
				className='w-[300px] '
				src={KaiyoLogo}
				alt=''
			/>
			<ul className='flex gap-12 py-4 bg-red-900 w-full items-center justify-center'>
				<li className='text-white hover:text-[#e8e6e6]  md:text-lg text-md'>
					<Link to={'/'}>Home</Link>
				</li>
				<li className='text-white  hover:text-[#e8e6e6] md:text-lg text-md'>
					<Link to={'/about'}>About</Link>
				</li>
				<li className='text-white  hover:text-[#e8e6e6] md:text-lg text-md'>
					<Link to={'/menu'}>Menu</Link>
				</li>
				<li className='text-white  hover:text-[#e8e6e6] md:text-lg text-md'>
					<Link to={'/faq'}>FAQ</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
