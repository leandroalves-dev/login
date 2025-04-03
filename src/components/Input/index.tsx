interface InputProps{
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    type: string
    className?: string
}


const Input = ({ name, value, onChange, placeholder, type, className}: InputProps) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`border-2 border-white/20 text-[16px] pr-12 text-white w-full rounded-[40px] p-3 outline-none ${className}`}    
        />
    )
}

export default Input
