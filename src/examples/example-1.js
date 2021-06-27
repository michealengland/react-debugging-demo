/**
 * Try:
 * Fix the missing value and render a sentence.
 */
export default function Paragraph({textObj}) {
    const {word1, word2, word3} = textObj
    return (
        <h3 className='example-inner'>{`${word1} ${word2}`}</h3>
    );
}
