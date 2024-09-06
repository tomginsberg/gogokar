import { Navbar } from 'flowbite-react';

export function MyNavbar() {
    return (
        <Navbar className={"p-8 sm:px-12"}>

            <Navbar.Brand href="/">
                <img
                    src="/GO-GO-LOGO-TRANSPARENT.png"  // Update this to your actual logo path
                    className="mr-3 h-16 sm:h-9"
                    alt="Logo"
                />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Navbar.Link href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="/about">About</Navbar.Link>
                <Navbar.Link href="/services">Services</Navbar.Link>
                <Navbar.Link href="/contact">Contact</Navbar.Link>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default MyNavbar;