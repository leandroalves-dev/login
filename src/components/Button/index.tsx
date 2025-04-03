interface ButtonProps{
    title: string
}

const Button = ({ title }: ButtonProps) => {
    return (
        <button className="bg-white/50 w-full rounded-[40px] p-3 cursor-pointer hover:bg-white/60 text-[18px] text-zinc-800">{title}</button>
    )
}

export default Button