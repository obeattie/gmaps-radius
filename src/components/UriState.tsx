import { useMountEffect } from '@react-hookz/web'
import type { ReactElement } from 'react'
import { useMap, useMapEvents } from 'react-leaflet'

export default function UriState(): ReactElement {
	const map = useMap()
	function update(): void {
		const url = new URL(window.location.href)
		url.searchParams.set('lat', map.getCenter().lat.toString())
		url.searchParams.set('lng', map.getCenter().lng.toString())
		url.searchParams.set('z', map.getZoom().toString())
		window.history.replaceState(undefined, '', url.toString())
	}
	useMapEvents({
		moveend: update,
		zoomend: update
	})

	// Set the bounds on first load, if the relevant params are in the URL
	useMountEffect(() => {
		const parameters = new URL(window.location.href).searchParams
		const lat = Number.parseFloat(parameters.get('lat') ?? '')
		const lng = Number.parseFloat(parameters.get('lng') ?? '')
		const zoom = Number.parseFloat(parameters.get('z') ?? '') || undefined
		if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
			map.setView([lat, lng], zoom, { animate: false })
		} else if (zoom) {
			map.setZoom(zoom, { animate: false })
		}
	})

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <></>
}
