import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
	About,
	Cart,
	Checkout,
	ErrorPage,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'products/:id',
				element: <SingleProduct />,
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'checkout',
				element: <Checkout />,
			},
			{
				path: 'orders',
				element: <Orders />,
			},
		],
	},
	{
		path: '/login',
		element: <Login />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/register',
		element: <Register />,
		errorElement: <ErrorPage />,
	},
]);

const App = () => {
	return <RouterProvider router={router}></RouterProvider>;
};
export default App;
