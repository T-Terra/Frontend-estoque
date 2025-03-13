type Props = {
    children: React.ReactNode
}

export function NavMobileItem ({ children }: Props) {
    return (
        <div className="w-full px-4 py-2 border-b border-gray-300">
            {children}
        </div>
    )
}