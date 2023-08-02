interface HeaderContentProps {
    children: React.ReactNode
}

export default function HeaderContentText({ children }: HeaderContentProps) {
    return (<div style={style}>{children}</div>)
}

const style = {
    display: "flex",
    FlexDirection: "row",
    justifyContent: "space-between"
}