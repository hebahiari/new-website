import Link from 'next/link'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <Link href='#about' className='link'>About</Link>
            <Link href='#about' className='link'>Projects</Link>
            <Link href='#about' className='link'>Contact</Link>
        </div>
    )
}

export default NavBar