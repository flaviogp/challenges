import { useState, useEffect } from 'react'
import Logo from '../../assets/shared/logo.svg'
import { Nav } from '../Nav'

export const Header = () => {
    const [menuActive, setMenuActive] = useState(false)


    useEffect(()=>{
        if(!menuActive){
            const el = document.querySelector('.menu-active');
            el?.classList.remove('menu-active')
            console.log('menu desativado')
            return;
        } 
        const el = document.querySelector('.nav-bar');
        el?.classList.add('menu-active')
        console.log('menu ativado')
        return;
    }, [menuActive])

    return(
        <header className="header">
            <div className="brand">
                <img src={Logo} alt="" />
            </div>
            <div className='nav-container'>
                <div className="hamburguer-menu">
                    <label htmlFor="hamburguer-menu">
                        <input type="checkbox" name="" id="hamburguer-menu" onChange={() => setMenuActive(!menuActive)}/>
                    </label>
                </div>
                < Nav list={['home', 'destination', 'crew', 'technology']}/>
            </div>
        </header>
    )
}