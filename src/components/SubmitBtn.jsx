import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<button
			className='btn btn-primary uppercase btn-block'
			disabled={isSubmitting}
		>
			{isSubmitting ? (
				<>
					<span className='loading loading-bars'></span>
					sending...
				</>
			) : (
				text || 'submit'
			)}
		</button>
	);
};

export default SubmitBtn;
