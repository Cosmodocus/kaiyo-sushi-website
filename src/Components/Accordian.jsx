import React, { useState } from 'react';
import { faqAccordion } from '../data';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Accordian = () => {
	const [selected, setSelected] = useState(0);

	const handleSelected = (getCurrentId) => {
		setSelected(selected === getCurrentId ? null : getCurrentId);
		console.log(getCurrentId);
	};

	return (
		<section className='m-2 pt-6'>
			<h1 className='md:text-6xl text-4xl text-black font-bold text-center py-2'>
				FAQ
			</h1>
			{faqAccordion.map((faq) => (
				<div
					key={faq.id}
					className='flex flex-col  justify-center md:items-center'
				>
					<div className='border-4 md:w-[900px]  border-red-900 hover:bg-red-950 hover:border-red-950 rounded-lg bg-red-900 flex flex-col justify-between md:text-xl text-md md:mx-24 my-2'>
						<div
							className='flex justify-between items-center text-white px-4 py-4 cursor-pointer'
							onClick={() => handleSelected(faq.id)}
						>
							<h2>
								{`${faq.id}) `}
								{faq.question}
							</h2>
							<span>
								{selected === faq.id ? <FaCaretUp /> : <FaCaretDown />}
							</span>
						</div>
						<div
							className={
								selected === faq.id
									? 'block justify-between shadow-inner border-none rounded-md bg-white text-black px-4 py-4 '
									: 'hidden'
							}
						>
							<p>{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Accordian;
