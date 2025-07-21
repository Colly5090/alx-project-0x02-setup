import Link from "next/link";


const Header: React.FC = () => {
    return (
        <header className="bg-green-600 text-white p-4">
            <nav>
                <ul className="flex space-x-4">
                    <Link href="/home" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/about" className="hover:underline">
                        About
                    </Link>
                    <Link href="/posts" className="hover:underline">
                        post
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;