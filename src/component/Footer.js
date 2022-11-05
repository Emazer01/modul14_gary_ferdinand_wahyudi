import logo from '../images/logo.svg';
const Footer = () => {
    return (
        <footer>
            <left>
                <h3>About the App</h3>
                <p>Netlab Bookstore</p>
                <p>Universitas Indonesia</p>
                <p>Depok, Jawa Barat</p>
                <p>© 2022 by Netlab Bookstore</p>
            </left>
            <left>
                <h3>About the Creator</h3>
                <p>Gary Ferdinand Wahyudi</p>
                <p>Netlab Bookstore</p>
                <p>320200401008</p>
                <p>© 2022</p>
            </left>
            <left>
                <h3>This App Build Using</h3>
                <div className='logo-foot'>
                    <img src={logo} className="App-logo-foot" alt="logo"/>
                    <h1>ReactJS</h1>
                </div>
            </left>
        </footer>
    )
 }

 export default Footer