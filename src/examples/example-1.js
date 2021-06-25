
/**
 * Triggering a React TypeError by referencing a value that doens't exist.
 *
 * @param {Object} textObj Object containing text properties.
 */
export default function Paragraph({textObj}) {
    const {word1, word2, word3} = textObj

    return (
        <p>{`${word1} + ${word2} + ${word3.value}`}</p>
    );
}