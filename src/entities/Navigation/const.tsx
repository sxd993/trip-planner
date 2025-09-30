import { House, Plane, Settings } from "lucide-react"

interface LinksProps {
    id: number,
    section_name: string,
    path: string,
    icon: React.ReactNode
}

export const links: LinksProps[] = [
    {
        id: 1,
        section_name: 'Home',
        path: '/',
        icon: <House />
    },
    {
        id: 2,
        section_name: 'Trips',
        path: '/trips',
        icon: <Plane />
    },
    {
        id: 3,
        section_name: 'Settings',
        path: '/settings',
        icon: <Settings />
    }
]