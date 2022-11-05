import { useState } from "react";
import foto from '../images/DSC_0092.jpg';
import Stack from '@mui/material/Stack';
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
    const [me, setMe] = useState({
        name: "Gary Ferdinand Wahyudi",
        npm: "320200401008",
        university: "Universitas Pertahanan Republik Indonesia",
        study: "Military Informatic Engineering",
        hobbies: "Tech Enthusiasts"
        });

    return (
        <div className="card">
            <h2>Contact Us</h2>
            <div className="contact">
                <div className="about">
                    <img className="foto" src={foto} />
                    <div className="isiabout">
                        <h2>Creator</h2>
                        <h3>My name is {me.name}</h3>
                        <h3>I am from {me.university} with NPM {me.npm}.</h3>
                        <h3>I currently studying for a Bachelor Degree in {me.study}</h3>
                        <h3>I am a {me.hobbies}</h3>
                    </div>
                </div>
                <h2 className="soc">Social Media</h2>
                <div className="listbutton-soc">
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="email" size="large"
                        onClick={() => {
                            window.open("https://garyferdinand15@gmail.com/");
                          }}>
                            <EmailIcon sx={{ fontSize:55}}/>
                        </IconButton>
                        <IconButton aria-label="linkedin" size="large"
                        onClick={() => {
                            window.open("https://www.linkedin.com/in/gary-ferdinand-wahyudi");
                          }}>
                            <LinkedInIcon sx={{ fontSize:50}}/>
                        </IconButton>
                        <IconButton aria-label="instagram" size="large"
                        onClick={() => {
                            window.open("https://www.instagram.com/gary_ferdinand/");
                          }}>
                            <InstagramIcon sx={{ fontSize:45}}/>
                        </IconButton>
                        <IconButton aria-label="telegram" size="large"
                        onClick={() => {
                            window.open("https://t.me/Emazer_Nlt");
                          }}>
                            <TelegramIcon sx={{ fontSize:45}}/>
                        </IconButton>
                        <IconButton aria-label="whatsapp" size="large"
                        onClick={() => {
                            window.open("https://wa.me/0881026704385");
                          }}>
                            <WhatsAppIcon sx={{ fontSize:43}}/>
                        </IconButton>
                        
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Contact