import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire';

const LocationMarker = ({ lat, lng, highlighted, onClick }) => {
	return (
		<div
			className="location-marker"
			highlighted={highlighted}
			onClick={onClick}
		>
			<Icon icon={locationIcon} className="location-icon" />
		</div>
	);
};

export default LocationMarker;
