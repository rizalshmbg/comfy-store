import { Link } from 'react-router-dom';
import { hero1, hero2, hero3, hero4 } from '../assets';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
	return (
		<div className='grid lg:grid-cols-2 gap-24 items-center'>
			<div>
				<h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
					We Are Changing the Way People Shop
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-8'>
					We love thinking differently and coming up with new ideas that make
					our products, and your life, better. We have loads of affordable
					products and solutions to help you live a more sustainable life at
					home.
				</p>
				<div className='mt-10'>
					<Link to='/products' className='btn btn-primary uppercase'>
						Our Products
					</Link>
				</div>
			</div>
			<div className='hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
				{carouselImages.map((image, i) => {
					return (
						<div key={image} className='carousel-item'>
							<img
								src={image}
								alt={image}
								className='rounded-box h-full w-80 object-cover'
								id={i}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Hero;
