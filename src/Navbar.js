const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>VocalCards</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{ 
            }}>New Blog</a>
            <button>+</button>
        </div>
        </nav>
     );
}
 
export default Navbar;