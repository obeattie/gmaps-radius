import { useList } from '@react-hookz/web'
import type { LatLngExpression } from 'leaflet'
import { nanoid } from 'nanoid'
import type { ReactElement } from 'react'
import { Circle as MapCircle, useMapEvent } from 'react-leaflet'

/** Radius of the earth in various units */
export const EarthRadii = {
	mi: 3963.1676,
	km: 6378.1,
	ft: 20_925_524.9,
	mt: 6_378_100,
	in: 251_106_299,
	yd: 6_975_174.98,
	fa: 3_487_587.49,
	na: 3443.898_49,
	ch: 317_053.408,
	rd: 1_268_213.63,
	fr: 31_705.3408
}

export type RadiusUnit = keyof typeof EarthRadii

interface Circle {
	id: string
	center: LatLngExpression
	radius: number
	radiusUnit: RadiusUnit
}

interface Properties {
	radius: number
	unit: RadiusUnit
}

export default function Radii({
	radius,
	unit: radiusUnit
}: Properties): ReactElement {
	const [circles, circlesActions] = useList<Circle>([])

	// Add a circle on click
	useMapEvent('click', event => {
		circlesActions.push({
			radius,
			radiusUnit,
			id: nanoid(),
			center: event.latlng
		})
	})

	return (
		<>
			{circles.map(c => (
				<MapCircle
					key={c.id}
					center={c.center}
					weight={1}
					radius={(c.radius / EarthRadii[c.radiusUnit]) * EarthRadii.mt}
					eventHandlers={{
						contextmenu: () =>
							circlesActions.filter(candidate => candidate !== c)
					}}
				/>
			))}
		</>
	)
}
