
const AuthLayout = function({ children } : { children: React.ReactNode})
{
    return (
        <div className="h-full flex items-center justify-center bg-gradient-to-r from-[#FF928B] to-[#FFAC81]">
            {children}
        </div>
    )
}

export default AuthLayout;