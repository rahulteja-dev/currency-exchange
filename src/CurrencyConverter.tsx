/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useTransition, animated } from 'react-spring'

const CurrencyConverter = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(false)
	}, [])

	const transition = useTransition(isLoading, {
		config: { mass: 1, tension: 80, friction: 18 },
		from: { x: 0, y: 600, opacity: 0, delay: 450 },
		enter: { x: 0, y: 0, opacity: 1, delay: 450 },
		leave: { x: 0, y: 600, opacity: 0, delay: 450 },
	})

	return (
		<React.Suspense fallback="Loading..">
			{transition((style, item) =>
				!item ? (
					<animated.div style={style}>
						<Container />
					</animated.div>
				) : (
					''
				)
			)}
		</React.Suspense>
	)
}

export default CurrencyConverter
