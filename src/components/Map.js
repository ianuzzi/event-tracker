import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import config from './../config.json'

import fireIcon from '@iconify/icons-mdi/fire'
import volcanoIcon from '@iconify-icons/emojione-v1/volcano'
import iceShelf from '@iconify-icons/openmoji/ice-shelf'

// TODO: move stuff from this file to a config.json

const Map = ({ eventData, center, zoom }) => {
	//
	const [locationInfo, setLocationInfo] = useState(null)

	const categoriesToPlot = {
		8: {
			type_name: 'Wildfire',
			icon_type: fireIcon
		},
		12: {
			type_name: 'Volcano',
			icon_type: volcanoIcon
		},
		15: {
			type_name: 'Iceburg',
			icon_type: iceShelf
		}
	}

	const markers = eventData.map((ev) => {
		// 2nd and 3rd arguments of conditional ignore any data with multiple points
		// TODO: fix the above so that it deals with multi point objects
		console.log(eventData)
		if (
			categoriesToPlot.hasOwnProperty(ev.categories[0].id) &&
			Boolean(ev.geometries[0].coordinates[1]) &&
			Boolean(ev.geometries[0].coordinates[0])
		) {
			return (
				<LocationMarker
					key={ev.id}
					id={ev.id}
					title={ev.title}
					type={ev.categories[0].title}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					highlighted="false"
					icon={categoriesToPlot[ev.categories[0].id].icon_type}
					setLocationInfo={setLocationInfo}
				/>
			)
		}
		return null
	})

	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: config.google_maps_api.api_key }}
				defaultCenter={center}
				defaultZoom={zoom}
				onClick={() => {
					setLocationInfo()
				}}
			>
				{markers}
			</GoogleMapReact>
			{locationInfo && (
				<LocationInfoBox
					info={locationInfo}
					onClickClose={() => {
						setLocationInfo()
					}}
				/>
			)}
		</div>
	)
}

Map.defaultProps = {
	center: {
		lat: 47.6062,
		lng: -122.3321
	},
	zoom: 6
}

export default Map
