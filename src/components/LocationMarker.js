import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire';

const LocationMarker = (props) => {
	//
	const node = useRef();

	const [highlighted, setHighlighted] = useState(props.highlighted);

	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			console.log(node.current);
			return;
		}
		setHighlighted('false');
	};

	const clickToPopupInfo = () => {
		setHighlighted('true');
		props.setLocationInfo({
			id: props.id,
			title: props.title
		});
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div
			ref={node}
			className="location-marker"
			onClick={(e) => clickToPopupInfo()}
		>
			<Icon
				icon={locationIcon}
				highlighted={highlighted}
				className="location-icon"
			/>
		</div>
	);
};

export default LocationMarker;
