interface DividerProps {
    className?: string;
}

export default function Divider({className}:DividerProps) {
    return (
        <div className={`h-px bg-[--md-sys-color-outline-variant] border-none ${className}`}/>
    )
}