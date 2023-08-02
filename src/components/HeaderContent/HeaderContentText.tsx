interface HeaderContentProps {
    children: React.ReactNode
}

export default function HeaderContentText({ children }: HeaderContentProps) {
    return <h1 style={{ color: '#4d4d4d' }}>{children}</h1>
}