import { FC, SVGProps } from 'react';

interface NavButtonProps {
    icon: FC<SVGProps<SVGSVGElement>>;
    label: string;
    isActive: boolean;
    onClick: () => void;
}

export function NavButton({ icon: Icon, label, isActive, onClick }: NavButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-1 ${isActive ? "text-purple-600" : "text-gray-400"
                }`}
        >
            <Icon className="h-6 w-6" />
            <span className="text-xs">{label}</span>
        </button>
    )
}