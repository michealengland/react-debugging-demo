/**
 * Try:
 * Change the elephants name.
 */
export default function Elephant() {
	let elephantName = 'Ricky Bobby';

	const onChange = (e) => {
		console.log('input value', e.target.value)
		elephantName = e.target.value;
	}

	return (
		<div>
			<h2>Change the elephants name</h2>
			<label htmlFor="name">Elephant Name:</label>
			<input name="name" placeholder={elephantName} onChange={onChange} id="elephant-name" type="text" />
			<p>Elephant Name: {elephantName}</p>
		</div>
	)
}