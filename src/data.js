import KaiyoRestaurantImg1 from './assets/kaiyo-restaurant-img.jpg';
import KaiyoRestaurantImg2 from './assets/kaiyo-restaurant-img2.jpg';
import KaiyoRestaurantImg3 from './assets/kaiyo-restaurant-img3.jpg';
import KaiyoRestaurantImg4 from './assets/kaiyo-restaurant-img4.jpg';
import KaiyoRestaurantImg5 from './assets/kaiyo-restaurant-img5.jpg';
import KaiyoRestaurantImg6 from './assets/kaiyo-restaurant-img6.jpg';
import KaiyoSoup from './assets/miso-soup.jpg';
import KaiyoMaki1 from './assets/kaiyo-maki-rolls.jpg';
import KaiyoMaki2 from './assets/kaiyo-maki-rolls2.jpg';
import KaiyoPlatter1 from './assets/kaiyo-sushi-platter-1.png';
import KaiyoPlatter2 from './assets/kaiyo-sushi-platter-2.png';
import KaiyoPlatter3 from './assets/kaiyo-sushi-platter-3.jpg';
import KaiyoAppetizer1 from './assets/kaiyo-appetizer-1.jpg';
import KaiyoSpecial1 from './assets/kaiyo-special-1.jpg';
import KaiyoSushi2 from './assets/kaiyo-sushi-2.jpg';
import KaiyoHandRoll1 from './assets/kaiyo-hand-rolls-1.jpg';
import KaiyoHandRoll2 from './assets/kaiyo-hand-rolls-2.jpg';

export const slides = [
	{ id: 1, image: KaiyoRestaurantImg1, alt: 'Kaiyo Restaurant Image 1' },
	{ id: 2, image: KaiyoRestaurantImg2, alt: 'Kaiyo Restaurant Image 1' },
	{ id: 3, image: KaiyoRestaurantImg3, alt: 'Kaiyo Restaurant Image 1' },
	{ id: 4, image: KaiyoRestaurantImg4, alt: 'Kaiyo Food Image 1' },
	{ id: 5, image: KaiyoRestaurantImg5, alt: 'Kaiyo Food Image 2' },
	{ id: 6, image: KaiyoRestaurantImg6, alt: 'Kaiyo Food Image 2' },
];

export const menu = [
	{
		category: 'Appetizers',
		items: [
			{
				id: 1,
				name: 'Edamame',
				pcs: null,
				spicy: false,
				vegan: true,
				price: 3.99,
			},
			{ id: 2, name: 'Gyoza', pcs: 6, spicy: false, vegan: false, price: 5.99 },
			{
				id: 3,
				name: 'Agedashi Tofu',
				pcs: null,
				spicy: false,
				vegan: true,
				price: 4.99,
			},
			{
				id: 4,
				name: 'Tempura Shrimp',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 6.99,
			},
			{
				id: 5,
				name: 'Takoyaki',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 7.49,
			},
			{
				id: 6,
				name: 'Spring Rolls',
				pcs: 4,
				spicy: false,
				vegan: true,
				price: 4.49,
			},
			{
				id: 7,
				name: 'Chicken Satay',
				pcs: 4,
				spicy: false,
				vegan: false,
				price: 6.99,
			},
			{
				id: 8,
				name: 'Crab Rangoon',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 5.49,
			},
			{
				id: 9,
				name: 'Shrimp Tempura',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 8.99,
			},
		],
		images: [{ id: 1, image: KaiyoAppetizer1 }],
	},
	{
		category: 'Soup',
		items: [
			{
				id: 10,
				name: 'Miso Soup',
				pcs: null,
				spicy: false,
				vegan: false,
				price: 1.99,
			},
			{
				id: 11,
				name: 'Vegetable Soup',
				pcs: null,
				spicy: false,
				vegan: true,
				price: 2.49,
			},
			{
				id: 12,
				name: 'Seafood Soup',
				pcs: null,
				spicy: false,
				vegan: false,
				price: 3.99,
			},
			{
				id: 13,
				name: 'Tom Yum Soup',
				pcs: null,
				spicy: true,
				vegan: false,
				price: 4.99,
			},
			{
				id: 14,
				name: 'Chicken Noodle Soup',
				pcs: null,
				spicy: false,
				vegan: false,
				price: 3.49,
			},
			{
				id: 15,
				name: 'Hot and Sour Soup',
				pcs: null,
				spicy: true,
				vegan: false,
				price: 3.99,
			},
			{
				id: 16,
				name: 'Wonton Soup',
				pcs: null,
				spicy: false,
				vegan: false,
				price: 3.49,
			},
			{
				id: 17,
				name: 'Egg Drop Soup',
				pcs: null,
				spicy: false,
				vegan: false,
				price: 2.99,
			},
			{
				id: 18,
				name: 'Pho',
				pcs: null,
				spicy: true,
				vegan: false,
				price: 5.99,
			},
		],
		images: [{ id: 1, image: KaiyoSoup }],
	},

	{
		category: 'Maki/Rolls',
		items: [
			{
				id: 19,
				name: 'Spicy Scallop Roll',
				pcs: 6,
				spicy: true,
				vegan: false,
				price: 11.99,
			},
			{
				id: 20,
				name: 'Volcano Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 13.49,
			},
			{
				id: 21,
				name: 'Vegetarian Roll',
				pcs: 6,
				spicy: false,
				vegan: true,
				price: 8.99,
			},
			{
				id: 22,
				name: 'Salmon Roll',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 9.99,
			},
			{
				id: 23,
				name: 'Tuna Roll',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 10.49,
			},
			{
				id: 24,
				name: 'Spicy Crab Roll',
				pcs: 6,
				spicy: true,
				vegan: false,
				price: 10.99,
			},
			{
				id: 25,
				name: 'Rainbow Crab Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 11.49,
			},
			{
				id: 26,
				name: 'Cajun Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 12.49,
			},
			{
				id: 27,
				name: 'Vegetable Tempura Roll',
				pcs: 6,
				spicy: false,
				vegan: true,
				price: 8.99,
			},
			{
				id: 28,
				name: 'Sweet Potato Roll',
				pcs: 6,
				spicy: false,
				vegan: true,
				price: 8.49,
			},
			{
				id: 29,
				name: 'Philly Crunch Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 11.99,
			},
			{
				id: 30,
				name: 'Rock and Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.49,
			},
			// Add more Maki/Rolls items here as needed
		],
		images: [
			{ id: 1, image: KaiyoMaki1 },
			{ id: 2, image: KaiyoMaki2 },
		],
	},
	{
		category: 'Special Rolls',
		items: [
			{
				id: 31,
				name: 'Dragon Fire Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 14.99,
			},
			{
				id: 32,
				name: 'Rainbow Fusion Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 13.99,
			},
			{
				id: 33,
				name: 'Sunrise Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.99,
			},
			{
				id: 34,
				name: 'Tropical Delight Roll',
				pcs: 8,
				spicy: false,
				vegan: true,
				price: 12.49,
			},
			{
				id: 35,
				name: 'Spicy Crunchy Tuna Roll',
				pcs: 6,
				spicy: true,
				vegan: false,
				price: 11.99,
			},
			{
				id: 36,
				name: 'Black Dragon Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 13.49,
			},
			{
				id: 37,
				name: 'Golden California Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.99,
			},
			{
				id: 38,
				name: 'Dynamite Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 13.99,
			},
			{
				id: 39,
				name: 'Ocean Dream Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 14.49,
			},
			{
				id: 40,
				name: 'Lion King Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 13.99,
			},
			{
				id: 41,
				name: 'Sushi Bomb Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 14.99,
			},
			{
				id: 42,
				name: 'Sunset Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.99,
			},
			{
				id: 43,
				name: 'Crunchy Shrimp Roll',
				pcs: 6,
				spicy: false,
				vegan: false,
				price: 11.99,
			},
			{
				id: 44,
				name: 'Fiery Dragon Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 14.49,
			},
			{
				id: 45,
				name: 'Red Dragon Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 13.99,
			},
			{
				id: 46,
				name: 'Sweetheart Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.99,
			},
			{
				id: 47,
				name: 'Shrimp Lovers Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 12.49,
			},
			{
				id: 48,
				name: 'Green Dragon Roll',
				pcs: 8,
				spicy: false,
				vegan: false,
				price: 13.49,
			},
			{
				id: 49,
				name: 'Crazy Salmon Roll',
				pcs: 8,
				spicy: true,
				vegan: false,
				price: 14.49,
			},
			{
				id: 50,
				name: 'Sunflower Roll',
				pcs: 8,
				spicy: false,
				vegan: true,
				price: 12.49,
			},
			// Add more Special Rolls items here as needed
		],
		images: [
			{ id: 1, image: KaiyoSushi2 },
			{ id: 2, image: KaiyoSpecial1 },
		],
	},
	{
		category: 'Special Hand Rolls',
		items: [
			{
				id: 51,
				name: 'Spicy Tuna Hand Roll',
				pcs: 1,
				spicy: true,
				vegan: false,
				price: 6.99,
			},
			{
				id: 52,
				name: 'Salmon Avocado Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 7.49,
			},
			{
				id: 53,
				name: 'California Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 6.99,
			},
			{
				id: 54,
				name: 'Shrimp Tempura Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 8.49,
			},
			{
				id: 55,
				name: 'Vegetable Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: true,
				price: 5.99,
			},
			{
				id: 56,
				name: 'Spider Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 8.99,
			},
			{
				id: 57,
				name: 'Dragon Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 9.49,
			},
			{
				id: 58,
				name: 'Tuna Avocado Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 7.99,
			},
			{
				id: 59,
				name: 'Eel Cucumber Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 8.49,
			},
			{
				id: 60,
				name: 'Rainbow Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 9.99,
			},
			{
				id: 61,
				name: 'Crab Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 7.49,
			},
			{
				id: 62,
				name: 'Yellowtail Scallion Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 8.99,
			},
			{
				id: 63,
				name: 'Spicy Salmon Hand Roll',
				pcs: 1,
				spicy: true,
				vegan: false,
				price: 7.99,
			},
			{
				id: 64,
				name: 'Avocado Cucumber Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: true,
				price: 6.49,
			},
			{
				id: 65,
				name: 'Smoked Salmon Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 8.49,
			},
			{
				id: 66,
				name: 'Tuna Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 7.99,
			},
			{
				id: 67,
				name: 'Spicy Scallop Hand Roll',
				pcs: 1,
				spicy: true,
				vegan: false,
				price: 8.99,
			},
			{
				id: 68,
				name: 'Cucumber Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: true,
				price: 5.99,
			},
			{
				id: 69,
				name: 'Salmon Skin Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: false,
				price: 7.49,
			},
			{
				id: 70,
				name: 'Vegetarian Hand Roll',
				pcs: 1,
				spicy: false,
				vegan: true,
				price: 6.99,
			},
			// Add more Special Hand Rolls items here as needed
		],
		images: [
			{ id: 1, image: KaiyoHandRoll1 },
			{ id: 2, image: KaiyoHandRoll2 },
		],
	},
	{
		category: 'Platter Series',
		items: [
			{
				id: 71,
				name: 'Sashimi Platter',
				pcs: 12,
				spicy: false,
				vegan: false,
				price: 34.99,
			},
			{
				id: 72,
				name: 'Nigiri Platter',
				pcs: 10,
				spicy: false,
				vegan: false,
				price: 29.99,
			},
			{
				id: 73,
				name: 'Vegetarian Platter',
				pcs: 15,
				spicy: false,
				vegan: true,
				price: 24.99,
			},
			{
				id: 74,
				name: 'Sushi Boat',
				pcs: 24,
				spicy: false,
				vegan: false,
				price: 49.99,
			},
			{
				id: 75,
				name: "Chef's Choice Platter",
				pcs: 18,
				spicy: false,
				vegan: false,
				price: 39.99,
			},
			{
				id: 76,
				name: 'Deluxe Sushi Platter',
				pcs: 20,
				spicy: false,
				vegan: false,
				price: 44.99,
			},
			{
				id: 77,
				name: 'Family Platter',
				pcs: 30,
				spicy: false,
				vegan: false,
				price: 59.99,
			},
			{
				id: 78,
				name: 'Assorted Nigiri/Sashimi Platter',
				pcs: 16,
				spicy: false,
				vegan: false,
				price: 36.99,
			},
			{
				id: 79,
				name: 'Premium Sushi Platter',
				pcs: 25,
				spicy: false,
				vegan: false,
				price: 54.99,
			},
			{
				id: 80,
				name: 'Vegetable Sushi Platter',
				pcs: 12,
				spicy: false,
				vegan: true,
				price: 27.99,
			},
			{
				id: 81,
				name: 'Seafood Platter',
				pcs: 20,
				spicy: false,
				vegan: false,
				price: 49.99,
			},
			{
				id: 82,
				name: 'Specialty Roll Platter',
				pcs: 18,
				spicy: true,
				vegan: true,
				price: 41.99,
			},
			{
				id: 83,
				name: 'Deluxe Sashimi Platter',
				pcs: 16,
				spicy: false,
				vegan: false,
				price: 46.99,
			},
			{
				id: 84,
				name: 'Nigiri and Roll Combo Platter',
				pcs: 14,
				spicy: false,
				vegan: false,
				price: 37.99,
			},
			{
				id: 85,
				name: 'Sushi Party Platter',
				pcs: 40,
				spicy: false,
				vegan: false,
				price: 74.99,
			},
			{
				id: 86,
				name: 'Sashimi Deluxe Boat',
				pcs: 30,
				spicy: false,
				vegan: false,
				price: 64.99,
			},
			{
				id: 87,
				name: 'Ultimate Sushi Platter',
				pcs: 35,
				spicy: false,
				vegan: false,
				price: 69.99,
			},
			{
				id: 88,
				name: 'Premium Sashimi Platter',
				pcs: 24,
				spicy: false,
				vegan: false,
				price: 59.99,
			},
			{
				id: 89,
				name: "Sushi Lover's Platter",
				pcs: 28,
				spicy: false,
				vegan: false,
				price: 61.99,
			},
			{
				id: 90,
				name: 'Vegetarian Delight Platter',
				pcs: 18,
				spicy: false,
				vegan: true,
				price: 32.99,
			},
			// Add more Platter Series items here as needed
		],
		images: [
			{ id: 1, image: KaiyoPlatter1 },
			{ id: 2, image: KaiyoPlatter3 },
			{ id: 3, image: KaiyoPlatter2 },
		],
	},
];

export const faqAccordion = [
	{
		id: 1,
		question: "What are your restaurant's opening hours?",
		answer:
			'Our restaurant is open from Monday to Saturday, from 11:30 AM to 10:00 PM. We are closed on Sundays.',
	},
	{
		id: 2,
		question: 'Do you take reservations?',
		answer:
			'Yes, we accept reservations for both lunch and dinner. You can make a reservation by calling us during our business hours or using our online booking system.',
	},
	{
		id: 3,
		question: 'Can I order takeout or delivery?',
		answer:
			'Absolutely! We offer both takeout and delivery services. You can place your order online through our website or by calling our restaurant directly.',
	},
	{
		id: 4,
		question: 'Are you able to accommodate dietary restrictions?',
		answer:
			'Yes, we strive to accommodate various dietary needs and preferences. Please inform your server about any dietary restrictions, and we will do our best to tailor your meal accordingly.',
	},
	{
		id: 5,
		question: 'Do you offer catering services for events?',
		answer:
			"Yes, we provide catering services for events of all sizes. Whether it's a corporate gathering, birthday party, or wedding reception, we can create a customized menu to suit your needs.",
	},
	{
		id: 6,
		question: 'What safety measures do you have in place for COVID-19?',
		answer:
			'The health and safety of our guests and staff are our top priorities. We have implemented strict cleaning and sanitization protocols, practice social distancing in our seating arrangements, and require masks for all employees.',
	},
	{
		id: 7,
		question: 'Is there parking available at your restaurant?',
		answer:
			'Yes, we have ample parking available for our guests. Our parking lot is conveniently located near the restaurant entrance for easy access.',
	},
	{
		id: 8,
		question: 'Do you have gift cards available for purchase?',
		answer:
			'Yes, we offer gift cards that make the perfect gift for any occasion. You can purchase gift cards in various denominations at our restaurant or online through our website.',
	},
];
