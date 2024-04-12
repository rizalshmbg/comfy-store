import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
	const { meta } = useLoaderData();
	const { search, pathname } = useLocation();
	const navigate = useNavigate();
	const { pageCount, page } = meta.pagination;

	const handlePageChange = (pageNum) => {
		const searchParams = new URLSearchParams(search);
		searchParams.set('page', pageNum);
		navigate(`${pathname}?${searchParams.toString()}`);
	};

	const addPageButton = ({ pageNum, activeClass }) => {
		return (
			<button
				key={pageNum}
				onClick={() => handlePageChange(pageNum)}
				className={`btn btn-xs sm:btn-md border-none join-item ${
					activeClass ? 'bg-base-300 border-base-300 ' : ''
				}`}
			>
				{pageNum}
			</button>
		);
	};

	const renderPageButtons = () => {
		const pageButtons = [];

		// first button
		pageButtons.push(
			addPageButton({
				pageNum: 1,
				activeClass: page === 1,
			})
		);

		// dot 1 button
		if (page > 2) {
			pageButtons.push(
				<button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
					...
				</button>
			);
		}

		// active/current page
		if (page !== 1 && page !== pageCount) {
			pageButtons.push(
				addPageButton({
					pageNum: page,
					activeClass: true,
				})
			);
		}

		// dot 2 button
		if (page < pageCount - 1) {
			pageButtons.push(
				<button className='join-item btn btn-xs sm:btn-md' key='dots-2'>
					...
				</button>
			);
		}

		// last button
		pageButtons.push(
			addPageButton({
				pageNum: pageCount,
				activeClass: page === pageCount,
			})
		);
		return pageButtons;
	};

	if (pageCount < 2) return null;

	return (
		<div className='mt-16 flex justify-end'>
			<div className='join'>
				<button
					className='btn btn-xs sm:btn-md join-item uppercase'
					onClick={() => {
						let prevPage = page - 1;
						if (prevPage < 1) prevPage = pageCount;
						handlePageChange(prevPage);
					}}
				>
					Prev
				</button>
				{renderPageButtons()}
				<button
					className='btn btn-xs sm:btn-md join-item uppercase'
					onClick={() => {
						let nextPage = page + 1;
						if (nextPage > pageCount) nextPage = 1;
						handlePageChange(nextPage);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ComplexPaginationContainer;
