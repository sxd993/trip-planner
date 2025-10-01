import { Header } from "../../widgets/Header/Header";
import { Navigation } from "../../widgets/Navigation/Navigation";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Navigation />
        </div>
    );
};
