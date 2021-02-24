import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">Pizzas</div>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About Us</a></Link>
                <Link href="/pizzas"><a>Pizzas</a></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;