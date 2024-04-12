import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

const allProductsQuery = (queryParams) => {
	const { search, category, company, sort, price, shipping, page } =
		queryParams;

	return {
		queryKey: [
			'products',
			search ?? '',
			category ?? 'all',
			company ?? 'all',
			sort ?? 'a-z',
			price ?? 100000,
			shipping ?? false,
			page ?? 1,
		],
		queryFn: () => customFetch(url, { params: queryParams }),
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		// const params = new URL(request.url).searchParams;
		// const search = params.get('search');

		/* ONE LINE */
		const params = Object.fromEntries([
			...new URL(request.url).searchParams.entries(),
		]);

		const resp = await queryClient.ensureQueryData(allProductsQuery(params));
		const products = resp.data.data;
		const meta = resp.data.meta;
		return { products, meta, params };
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
