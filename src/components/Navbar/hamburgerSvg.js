export default function hamburger({color}) {
    return (
        <svg
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
        >
            <path
                d="M 0 2 L 0 4 L 24 4 L 24 2
            Z M 8 11 L 8 13 L 24 13 L 24 11
            Z M 0 20 L 0 22 L 24 22 L 24 20 Z"
            />
        </svg>

    )
}
