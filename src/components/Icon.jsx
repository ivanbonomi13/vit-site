export const Icon = ({ className, children }) => {
    return (
        <svg className={`${className} icon`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            {children}
        </svg>
    )
}