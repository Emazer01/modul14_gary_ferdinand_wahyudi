import { useState } from "react";
import logo from '../images/logo.svg';

const About = () => {
    const [app, setApp] = useState({
        name: "Netlab Bookstore",
        year: "2022",
        university: "Universitas Indonesia",
        location: "Depok, Jawa Barat"
        });
    return (
        <div className="card">
            <div className="about">
                <img className="logo-about" src={logo} />
                <div className="isiabout">
                    <h2>About the App</h2>
                    <h3>{app.name}</h3>
                    <h3>{app.university}</h3>
                    <h3>{app.location}</h3>
                    <h3>© {app.year} by {app.name}</h3>
                </div>
            </div>
            <h3>Website ini dibuat untuk kepentingan Tugas Pembelajaran Web Development menggunakan ReactJ</h3>
            <h3>Website ini sudah dilengkapi dengan react-router-dom untuk membantu routing antar halaman</h3>
            <h3>Styling yang digunakan pada Website ini adalah gabungan dari Native CSS dan library react Material UI</h3>
        </div>
    )
}

export default About