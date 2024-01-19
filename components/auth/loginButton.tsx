'use client';

import { useRouter } from "next/navigation";

interface LoginButtonProps{
    children: React.ReactNode;
    mode?: 'modal' | 'redirect';
    asChild?: boolean;
};

const LoginButton = function({ children, mode = 'redirect', asChild } : LoginButtonProps)
{
    const router = useRouter();

    function onClick()
    {
        router.push('/auth/login');
    }

    if (mode === 'modal')
    {
        return (
            <span>

            </span>
        )
    }

    return(
        <span onClick={onClick} className="cursor-pointer">
            { children }
        </span>
    )
}

export default LoginButton;