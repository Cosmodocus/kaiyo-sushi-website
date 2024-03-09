import React from 'react';
import { Link } from 'react-router-dom';
import KaiyoLogo from '../assets/kaiyo-sushi-logo.jpg';

const Navbar = () => {
	return (
		<nav className='w-full bg-red flex flex-col items-center justify-between border-b '>
			<img
				className='w-[300px]'
				src={KaiyoLogo}
				alt=''
			/>
			<ul className='flex gap-12 py-4 bg-red-900 w-full items-center justify-center'>
				<li className='text-white'>
					<Link to={'/'}>Home</Link>
				</li>
				<li className='text-white'>
					<Link to={'/about'}>About</Link>
				</li>
				<li className='text-white'>
					<Link to={'/menu'}>Menu</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;