import Link from 'next/link'
import Logo from  './logo';

function MainNavigation(){
    return (
        <header>
            <Link href='/'><Logo /></Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Artículos</Link></li>
                    <li><Link href='/posts'>Contactos</Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;