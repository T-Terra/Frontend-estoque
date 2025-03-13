type Props = {
    onClick?: VoidFunction
    type?: 'button' | 'submit'
    children: React.ReactNode
}

export function ButtonMenu({ type, onClick, children }: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex lg:hidden px-6"
        >
            {children}
        </button>
    )
}