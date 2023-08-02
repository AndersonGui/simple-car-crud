interface HeaderContentProps {
    children: React.ReactNode
}

export default function HeaderContentActions({ children }: HeaderContentProps) {
    return (
        <div style={{marginRight: '2%'}}> 
            {children}
        </div>
    )
}