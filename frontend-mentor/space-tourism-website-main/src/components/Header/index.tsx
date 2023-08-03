import Logo from '../../assets/shared/logo.svg'

export const Header = () => {
    return(
        <header className="header">
            <div className="brand">
                <img src={Logo} alt="" />
            </div>
            
            <nav className="nav-bar">
                <ul>
                    <li>
                        <a href="#home">Home </a>
                    </li>    
                    <li>
                        <a href="#crew">Crew </a>
                    </li>
                    <li>
                        <a href="#destination">Destination </a>
                    </li>
                    <li>
                        <a href="#technology">Technology </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}