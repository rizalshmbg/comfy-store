const About = () => {
	return (
		<>
			<div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center'>
				<h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl'>
					We Love
				</h1>
				<div className='stats bg-primary shadow'>
					<div className='stat'>
						<div className='stat-title text-primary-content text-4xl font-bold tracking-widest capitalize'>
							comfy
						</div>
					</div>
				</div>
			</div>
			<p className='mt-6 text-lg leading-8 max-w-2xl mx-auto text-justify'>
				We know that today people have less time and that it can be a struggle
				to get everything done. At Comfy, we will never stop innovating and
				using our unique design and development process to improve our products
				and help you have a better everyday life at home. We feel good design
				combines form, function, quality, sustainability at a low price. We call
				it “Democratic Design” because we believe good home furnishing is for
				everyone.
			</p>
		</>
	);
};

export default About;
