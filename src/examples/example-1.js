/**
 * Try:
 * Fix the missing value and render a sentence.
 */
export default function Paragraph({textObj}) {
    console.log('example1', textObj);
    const {word1, word2, word3} = textObj
    return (
        <h3 className='example-inner'>{`${word1} ${word2} ${word3}`}</h3>
    );
}
