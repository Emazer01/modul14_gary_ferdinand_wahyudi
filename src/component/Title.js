import logo from '../images/logo.svg';
import Navbar from './Navbar';

const Title = () => {
    return (
        <header className="card">
            <div className='App-header'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Netlab Bookstore</h1>
            </div>
            <Navbar />
        </header>
    )
}

export default Title