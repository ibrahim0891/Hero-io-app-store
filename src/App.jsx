import { Outlet } from "react-router";
import Nav from "./Pages/Global-components/Nav";
import Footer from "./Pages/Global-components/Footer";
import MobileNav from "./Pages/Global-components/MobileNav";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <div className='bg-gray-100 flex flex-col min-h-screen '>
            <Nav />
            <Outlet />
            <MobileNav />
            <Footer />

            <div>
                <Toaster position="top-center" containerClassName="p-12" toastOptions={{
                    duration: 2000,
                    className : 'px-6 py-3 bg-green-500'
                }} />
            </div>
        </div>
    );
}

export default App;
