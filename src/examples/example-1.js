
/**
 * Try:
 * Fix the missing value and render a sentence.
 */
export default function Paragraph({textObj}) {
    const {word1, word2, word3} = textObj

    return (
        <p>{`${word1} + ${word2} + ${word3.value}`}</p>
    );
}