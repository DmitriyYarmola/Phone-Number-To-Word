import { useEffect, useState } from 'react'
import { useDebounce } from './hooks'
import { Input } from './components'

export const App = () => {
	const [value, setValue] = useState('')
	const [word, setWord] = useState('')
	const debouncedValue = useDebounce(value, 500)

	const onChange = (event) => {
		const value = event.currentTarget.value
		setValue(value)
	}

	return (
		<div>
			<label>
				Enter your number: <Input value={value} onChange={onChange} />
			</label>
			<p>Converted word: {word}</p>
		</div>
	)
}
