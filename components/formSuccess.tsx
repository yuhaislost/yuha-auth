import { CheckCircleIcon } from "lucide-react";

interface FormSuccessProps{
    message?: string;
};

export const FormSuccess = function({ message } : FormSuccessProps)
{
    if (!message) return null;

    return (
        <div className="bg-emerald-500/15 p-3 rounded-md flex gap-x-2 items-center text-sm text-emerald-500">
            <CheckCircleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
}