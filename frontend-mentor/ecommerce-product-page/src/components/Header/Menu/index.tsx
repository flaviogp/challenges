import {useState} from 'react'

export function Menu() {
const [active, setActive] = useState(false)

    const handleChange = () => {
        setActive(!active)
    }

    return (
        <nav className={`header-menu ${active ? 'active-menu' : 'inactive-menu'}`}>
            <label htmlFor="hamburger-menu">
                <input type="checkbox" name="hamburger-menu" id="hamburger-menu" onChange={()=> handleChange()}/>
            </label>
            <ul>
                <li>
                    <a href="#">collections</a>
                </li>
                <li>
                    <a href="#">men</a>
                </li>
                <li>
                    <a href="#">women</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
            </ul>
        </nav>
    )
}