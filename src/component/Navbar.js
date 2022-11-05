import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="card">
                <nav>
                    <Link href="#" to="/contact">Contact</Link>
                    <Link href="#" to="/about">About</Link>
                    <Link href="#" to="/">Home</Link> 
                </nav>
        </div>
    )
 }

 export default Navbar