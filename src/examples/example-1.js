import Instructions from '../components/Instructions';
/**
 * Try:
 * Fix the missing value and render a sentence.
 */
export default function Paragraph({textObj}) {
    const {word1, word2, word3} = textObj
    return (
        <div className='example-outer'>
            <Instructions example={1} />
            <h3 className='example-inner'>{`${word1} ${word2} ${word3.value}`}</h3>
        </div>
    );
}
