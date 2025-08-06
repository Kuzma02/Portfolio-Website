import Link from "next/link";

const Header = () => {
    return <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between max-md:justify-center">
                <div className="text-3xl">KUZMA</div>
                <div className="hidden md:flex items-center space-x-8 text-lg uppercase">
                    <Link href="#about"
                          className="text-muted-foreground hover:text-foreground transition-colors">
                        About
                    </Link>
                    <Link href="#projects"
                          className="text-muted-foreground hover:text-foreground transition-colors">
                        Projects
                    </Link>
                    <Link href="#skills"
                          className="text-muted-foreground hover:text-foreground transition-colors">
                        Skills
                    </Link>
                    <Link href="#contact"
                          className="text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </nav>
}

export default Header;