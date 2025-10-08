import { Outlet } from "react-router";
import Nav from "./Pages/Global-components/Nav";
import Footer from "./Pages/Global-components/Footer";

function App() {
    return (
        <div className='bg-gray-100 flex flex-col min-h-screen '>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
