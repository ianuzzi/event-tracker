// App based on Traversy Media
// Build a Wildfire Tracker with React & NASA API
// https://youtu.be/ontX4zfVqK8

import { useState, useEffect } from 'react'
import config from './config.json'
import Map from './components/Map'
import LoadingSpinner from './components/LoadingSpinner'
import Header from './components/Header'

// TODO: Add other types of events (refactor icons to lookup from array)

const App = () => {
	//
	const [eventData, setEventData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true)
			const res = await fetch(
				config.nasa_api.url + '?api_key=' + config.nasa_api.api_key
			)
			const { events } = await res.json()
			setEventData(events)
			setLoading(false)
		}
		fetchEvents()
	}, [])

	return (
		<div>
			<Header />
			{!loading ? <Map eventData={eventData} /> : <LoadingSpinner />}
		</div>
	)
}

export default App
