
interface NavProps{
    list: string[];
    setDestination?: (dest: string) => void | undefined;
}

export function Nav({list, setDestination}: NavProps) {
    return(
    <nav className="nav-bar">
        <ul>
            {
                typeof setDestination !== 'undefined' ? (
                    list.map(item =>{
                        return(
                            <li key={item} >
                                <a href={`#${item}`} onClick={() => setDestination(item)}>{item}</a>
                            </li>
                        )
                    }
                )) : (
                    list.map(item =>{
                        return(
                            <li key={item} >
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        )
                    }
                ))
            }
        </ul>
    </nav>
    )
}

