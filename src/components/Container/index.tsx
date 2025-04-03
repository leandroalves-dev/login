interface ContainerProps{
    children: React.ReactNode
    className?: string
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`flex justify-center items-center h-screen w-screen bg-cover bg-center ${className}`} style={{ backgroundImage: "url('./bg.webp')" }}>
            
                {children}            

        </div>
    )
}

export default Container