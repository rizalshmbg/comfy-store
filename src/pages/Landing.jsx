import { Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

export const loader = async () => {
	const resp = await customFetch(url);
	const products = resp.data.data;
	console.log(products);
	return products;
};

const Landing = () => {
	return (
		<>
			<Hero />
		</>
	);
};

export default Landing;
