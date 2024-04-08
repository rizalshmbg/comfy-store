import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ req }) => {
	const resp = await customFetch(url);
	const products = resp.data.data;
	const meta = resp.data.meta;
	return { products, meta };
};

const Products = () => {
	return (
		<>
			<Filters />
			<ProductsContainer />
			<PaginationContainer />
		</>
	);
};

export default Products;
