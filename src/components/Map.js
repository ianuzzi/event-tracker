import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import config from './../config.json';

// TODO: move stuff from this file to a config.json

const Map = ({ eventData, center, zoom }) => {
	//
	const [locationInfo, setLocationInfo] = useState(null);

	const markers = eventData.map((ev) => {
		if (ev.categories[0].id === 8) {
			return (
				<LocationMarker
					key={ev.id}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					highlighted="false"
					onClick={() => {
						setLocationInfo({
							id: ev.id,
							title: ev.title
						});
					}}
				/>
			);
		}
		return null;
	});

	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: config.google_maps_api.api_key }}
				defaultCenter={center}
				defaultZoom={zoom}
				onClick={() => {
					setLocationInfo();
				}}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && (
				<LocationInfoBox
					info={locationInfo}
					onClickClose={() => {
						setLocationInfo();
					}}
				/>
			)}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 47.6062,
		lng: -122.3321
	},
	zoom: 6
};

export default Map;
