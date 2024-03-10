import React, { useState } from 'react';
import { slides } from '../data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ImageSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
	};

	return (
		<div className='md:w-full flex items-center justify-center gap-2 relative md:py-12 py-4'>
			<FaChevronLeft
				onClick={prevSlide}
				size={30}
				className=' cursor-pointer  rounded-full '
				alt='left arrow icon'
			/>
			<div className='flex overflow-hidden'>
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={`flex-shrink-0 ${
							currentSlide === index ? 'block' : 'hidden'
						}`}
					>
						<img
							src={slide.image}
							alt={slide.alt}
							className='md:max-w-sm  max-w-[15rem] '
						/>
					</div>
				))}
			</div>
			<FaChevronRight
				onClick={nextSlide}
				size={30}
				className=' cursor-pointer  rounded-full '
				alt='right arrow icon'
			/>
		</div>
	);
};

export default ImageSlider;
