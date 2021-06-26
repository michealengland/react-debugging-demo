import Instructions from "../components/Instructions";
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
			<div className='example-inner'>
				<h2>Change the elephant's name</h2>
				<input name="name" placeholder={"type here"} onChange={onChange} id="elephant-name" type="text" />
				<p>Current Name: {elephantName}</p>
			</div>
	)
}
