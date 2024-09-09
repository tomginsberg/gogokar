import {Navbar} from 'flowbite-react';

export function MyNavbar() {
    return (
        <div className="pb-32">
            <Navbar
                className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">

                <Navbar.Brand href="/">
                    <img
                        src="/GO-GO-LOGO-TRANSPARENT.png"  // Update this to your actual logo path
                        className="mr-3 h-16 sm:h-9"
                        alt="Logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle/>

                <Navbar.Collapse>
                    <Navbar.Link href="/">
                        Book Now!
                    </Navbar.Link>
                    <Navbar.Link href="/policies">Policies</Navbar.Link>
                    <Navbar.Link href="/contact">Contact</Navbar.Link>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default MyNavbar;