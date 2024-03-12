import React from 'react';
import ImageSlider from '../Components/ImageSlider';
import Banner from '../assets/sushi-banner-2.jpg';
import { HiChevronDoubleDown } from 'react-icons/hi';

const About = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center '>
			<header className='relative'>
				<img
					src={Banner}
					alt='Menu Banner'
					className='w-full h-auto'
				/>
				<div className='absolute inset-0 bg-black opacity-50'></div>
				<div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
					<h1 className='md:text-8xl text-4xl font-bold md:pb-4 text-center'>
						All About Us
					</h1>
					<p className='md:text-4xl text-lg py-4 text-center px-2 '>
						Learn about our goal to help you connect with Japan
					</p>
					<p className='md:text-4xl text-lg md:py-4 animate-bounce'>
						<HiChevronDoubleDown size={70} />
					</p>
				</div>
			</header>
			<div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-2'>
				<p className='md:text-left text-center text-md md:text-2xl mb-4 md:leading-[2.5rem] md:max-w-xl max-w-sm pt-6'>
					Welcome to Kaiyo Sushi, where tradition meets innovation in the heart
					of our vibrant community. Our story begins with a deep respect for the
					art of sushi, a culinary craft we have honed to perfection. Nestled in
					a prime location, Kaiyo Sushi offers a serene dining experience that
					transports you to the bustling streets of Tokyo with every bite.
				</p>
				<ImageSlider />
			</div>
		</div>
	);
};

export default About;
