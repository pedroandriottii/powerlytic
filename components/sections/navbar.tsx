import { Bell, Home, LineChart, User } from 'lucide-react'
import Link from 'next/link'

const navItems = [
    { icon: Home, label: 'Overview', href: '/' },
    { icon: LineChart, label: 'Reports', href: '/reports' },
    { icon: Bell, label: 'Notificações', href: '/notifications' },
    { icon: User, label: 'Perfil', href: '/profile' }
]

export function NavBar({ currentPath }: { currentPath: string }) {
    return (
        <nav className="sticky bottom-0 border-t bg-white">
            <div className="flex justify-around p-4">
                {navItems.map(({ icon: Icon, label, href }) => {
                    const isActive = currentPath === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center gap-1 ${isActive ? 'text-[#2D0C57]' : 'text-gray-400'
                                }`}
                        >
                            <Icon className="h-6 w-6" />
                            <span className="text-xs">{label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}