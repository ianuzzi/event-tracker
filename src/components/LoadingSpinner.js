import LoaderSpinner from 'react-loader-spinner';

const LoadingSpinner = () => {
	return (
		<div className="loader">
			<LoaderSpinner
				type="Circles"
				color="firebrick"
				height={100}
				width={100}
			/>
			<h1>Fetching data...</h1>
		</div>
	);
};

export default LoadingSpinner;
