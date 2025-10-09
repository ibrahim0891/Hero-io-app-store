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
            <MobileNav/>
            <Footer />

            <div><Toaster position="bottom-center" /></div>
        </div>
    );
}

export default App;
