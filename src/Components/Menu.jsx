import React from 'react';
import { menu } from '../data.js';
import Vegan from '../assets/vegan.png';
import Spicy from '../assets/spicy.png';

const Menu = () => {
	return (
		<section className=' grid md:grid-cols-2 grid-cols-1 gap-4 m-4 items-center justify-center'>
			{menu.map((category) => (
				<div
					key={category.category}
					className=' p-4 flex flex-col border rounded-xl '
				>
					<h1 className='text-2xl text-red-900 font-bold'>
						{category.category}
					</h1>
					{category.items.map((item) => (
						<div
							key={item.id}
							className='flex justify-between'
						>
							<div className='flex items-center justify-center'>
								<p className='flex gap-1 items-center justify-center font-semibold'>
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
							<span>{`$${item.price}`}</span>
						</div>
					))}
				</div>
			))}
		</section>
	);
};

export default Menu;
