/* eslint-disable react/jsx-handler-names */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import { useLocalStorageValue } from '@react-hookz/web'
import type { RadiusUnit } from 'components/Radii'
import Radii from 'components/Radii'
import UriState from 'components/UriState'
import type { LatLngExpression } from 'leaflet'
import { useState, type ReactElement } from 'react'
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

export default function App(): ReactElement {
	const center = useLocalStorageValue<LatLngExpression>('mapCenter', {
		defaultValue: [51.500_731_404_772_77, -0.124_639_923_858_087_11]
	})
	const zoom = useLocalStorageValue('mapZoom', { defaultValue: 13 })

	const [radiusValue, setRadiusValue] = useState(5)
	const [radiusUnit, setRadiusUnit] = useState<RadiusUnit>('mi')

	return (
		<>
			<MapContainer
				center={center.value}
				zoom={zoom.value}
				scrollWheelZoom
				zoomControl={false}
				className='relative z-10 h-screen w-screen'
			>
				<ZoomControl position='topright' />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
					url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
					subdomains='abcd'
					maxZoom={20}
				/>
				<Radii radius={radiusValue} unit={radiusUnit} />
				<UriState />
			</MapContainer>
			<div className='bg:text-white absolute bottom-3 left-3 z-20 rounded bg-white p-3 shadow-md dark:bg-gray-800'>
				<form className='mb-3 text-sm'>
					<input
						className='mr-2 rounded bg-white/10'
						type='number'
						value={radiusValue}
						onChange={(event): void =>
							setRadiusValue(event.target.valueAsNumber)
						}
					/>
					<select
						className='rounded bg-white/10'
						onChange={(event): void =>
							setRadiusUnit(event.target.value as RadiusUnit)
						}
						value={radiusUnit}
					>
						<option value='mi'>Miles</option>
						<option value='km'>Kilometers</option>
						<option value='ft'>Feet</option>
						<option value='mt'>Metres</option>
						<option value='in'>Inches</option>
						<option value='yd'>Yards</option>
						<option value='fa'>Fathoms</option>
						<option value='na'>Nautical miles</option>
						<option value='ch'>Chains</option>
						<option value='rd'>Rods</option>
						<option value='fr'>Furlongs</option>
						<option value='lms'>Light milliseconds</option>
					</select>
				</form>
				<div className='flex w-full text-xs'>
					<p className='m-0 grow text-gray-400'>
						Click to place a circle, right click to remove
					</p>
					<a
						href='https://github.com/obeattie/gmaps-radius'
						className='text-blue-900'
					>
						GitHub
					</a>
				</div>
			</div>
		</>
	)
}
