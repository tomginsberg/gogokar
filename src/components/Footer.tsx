"use client";

import {Footer} from "flowbite-react";
import {DarkThemeToggle} from "flowbite-react";

export function Component() {
    return (
        <Footer container>
            <div className="w-full px-4 text-center md:px-64">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="/"
                        src="https://gogokar.ca/wp-content/uploads/2024/06/Untitled-design-21.png"
                        alt="Flowbite Logo"
                        name="GoGoKar"
                    />

                    <Footer.LinkGroup>
                        <Footer.Link href="/">Book Now!</Footer.Link>
                        <Footer.Link href="/policies">Policies</Footer.Link>
                        <Footer.Link href="/contact">Contact</Footer.Link>
                    </Footer.LinkGroup>

                </div>
                <Footer.Divider/>
                <Footer.Copyright href="#" by="GoGoKar™" year={2024}/>
                <DarkThemeToggle className="mt-6"/>
            </div>
        </Footer>
    );
}


export default Component;