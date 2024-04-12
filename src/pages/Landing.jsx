import { FeaturedProducts, Hero } from '../components';
import { customFetch } from '../utils';

const url = '/products?featured=true';

const FeaturedProductsQuery = {
	queryKey: ['featuredProducts'],
	queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
	const resp = await queryClient.ensureQueryData(FeaturedProductsQuery);
	const products = resp.data.data;
	return { products };
};

const Landing = () => {
	return (
		<>
			<Hero />
			<FeaturedProducts />
		</>
	);
};

export default Landing;
