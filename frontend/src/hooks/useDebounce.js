import { useEffect, useState } from 'react'

export const useDebounce = (data, delay) => {
	const [value, setValue] = useState(null)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setValue(data)
		}, delay)

		return () => {
			clearTimeout(timeout)
		}
	}, [data])

	return value
}
