import Footer from "../partial/Client/footer.jsx"
import { Outlet } from "react-router-dom"
import Header from "../partial/Client/header.jsx"

function ClientLayout() {
    return (
        <div className="min-h-screen bg-black">
            <Header />
            <main className="min-h-[calc(100vh-200px)] px-6 py-12">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default ClientLayout