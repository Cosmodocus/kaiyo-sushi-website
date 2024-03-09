import React from 'react';
import ImageSlider from '../Components/ImageSlider';

const About = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center py-8 mx-2 '>
			<div className='max-w-screen-md'>
				<h1 className='text-4xl md:text-6xl font-bold text-center mb-4'>
					About Us
				</h1>
				<ImageSlider />
				<p className='text-center text-lg md:text-2xl mb-4 md:leading-[2.5rem]'>
					Welcome to Kaiyo Sushi, where tradition meets innovation in the heart
					of our vibrant community. Our story begins with a deep respect for the
					art of sushi, a culinary craft we have honed to perfection. Nestled in
					a prime location, Kaiyo Sushi offers a serene dining experience that
					transports you to the bustling streets of Tokyo with every bite.
				</p>
			</div>
		</div>
	);
};

export default About;
