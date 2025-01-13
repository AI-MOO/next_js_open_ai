import Link from "next/link";

const links = [
    { href: "/client", label: "client" },
    { href: "/drinks", label: "drinks" },
    { href: "/task", label: "task" }, 
    { href: "/query", label: "query" }
];

const Navbar = () => {
    return (
       <nav className="bg-base-300 py-10">
        <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
            <Link href="/" className="btn btn-primary">
            next.js
            </Link>
            <ul className="menu menu-horizontal md:ml-8">   
            {links.map((link) =>{
                return <li key={link.href}>
                    <Link href={link.href} className="Capitalize">
                       {link.label}
                    </Link>
                </li>
            })}
            </ul>
        </div>
       </nav>
    )
}
export default Navbar;