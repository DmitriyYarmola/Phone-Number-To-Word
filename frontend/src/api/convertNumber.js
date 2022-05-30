export const convertNumber = async (number) => {
	const response = await fetch('http://localhost:5000/api/convert', {
		method: 'POST',
		body: JSON.stringify({ number: number }),
	})

	return response.json()
}
