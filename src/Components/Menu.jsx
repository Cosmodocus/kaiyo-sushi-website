import React, { useState } from 'react';
import { menu } from '../data.js';
import Vegan from '../assets/vegan.png';
import Spicy from '../assets/spicy.png';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Menu = () => {
	const [selected, setSelected] = useState(0);

	const handleSelected = (getCurrentId) => {
		setSelected(selected === getCurrentId ? null : getCurrentId);
	};

	return (
		<section className=' flex flex-col gap-2 m-8 justify-center '>
			<h1 className='md:text-6xl text-4xl font-bold mx-auto py-2 '>
				Explore Our Menus
			</h1>
			{menu.map((category) => (
				<div
					key={category.category}
					className='w-full p-8 my-2 flex flex-col shadow-md bg-[#f7f7f7]  rounded-xl'
				>
					<h1
						onClick={() => handleSelected(category.category)}
						className='md:text-4xl text-2xl text-red-900 font-bold cursor-pointer flex justify-between items-center'
					>
						{category.category}{' '}
						{selected === category.category ? <FaCaretUp /> : <FaCaretDown />}
					</h1>
					{category.items.map((item) => (
						<div
							key={item.id}
							className={
								selected === category.category
									? 'flex items-center justify-between '
									: 'hidden'
							}
						>
							<div className='flex items-center justify-center '>
								<p className='flex gap-1 items-center justify-center py-2 md:text-xl text-md'>
									{`${item.id})`} {item.name}{' '}
									{item.pcs ? `(${item.pcs}pcs)` : null}{' '}
									{item.spicy ? (
										<img
											className='w-[20px] border-2 border-red-700 rounded-full'
											src={Spicy}
											alt=''
										/>
									) : null}
									{item.vegan ? (
										<img
											className='w-[20px] border-2 border-green-700 rounded-full'
											src={Vegan}
											alt=''
										/>
									) : null}
								</p>
							</div>
							<span className='md:text-xl text-md'>{`$${item.price}`}</span>
						</div>
					))}
					<div
						className={
							selected === category.category
								? 'flex w-full items-center justify-center py-2'
								: 'hidden'
						}
					>
						<div className='flex items-center justify-center gap-2'>
							{category.images &&
								category.images.map((image) => (
									<img
										key={image.id}
										className='scaled-image rounded-md mx-4'
										src={image.image}
										alt=''
									/>
								))}
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Menu;
