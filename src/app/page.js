import HomeContent from "./HomeContent";
import Sidebar from "./Sidebar";
import { AuthContextProvider } from "@/context/AuthContext";
import "./globals.css";

export default function Home() {
    return (
        <div>
            <AuthContextProvider>
                <HomeContent>
                    <Sidebar />
                </HomeContent>
            </AuthContextProvider>
        </div>
    );
}
