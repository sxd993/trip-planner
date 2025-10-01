import { links } from "./const";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <footer className="grid grid-cols-3 sticky bottom-0 min-h-[75px] bg-white shadow-md">
            {links.map((link) => (
                <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                        `flex flex-col justify-center items-center border-[0.5px] ${isActive ? "text-blue-500 font-semibold" : "text-gray-500"
                        }`
                    }
                >
                    {link.icon}
                    <span className="text-sm">{link.section_name}</span>
                </NavLink>
            ))}
        </footer>
    );
};
