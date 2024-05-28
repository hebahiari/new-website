import Link from 'next/link'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <h1>Heba Alhyari</h1>
            <p>Full Stack Engineer</p>
            <div className='nav-links'>
                <Link href='#about' className='link'>About</Link>
                <Link href='#about' className='link'>Projects</Link>
                <Link href='#about' className='link'>Contact</Link>
            </div>
        </div>
    )
}

export default NavBar