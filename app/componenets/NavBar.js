"use client"

import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#101010] relative shadow-md" style={{ boxShadow: "0 0 20px 0 rgba(255, 255, 255, 0.15)" }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/img/icon.png" className="w-[30px]" />
                        <span className="text-2xl tracking-wide">NeuroVision</span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link href="/analysis" className="text-[var(--foreground)] font-medium">Analysis</Link>
                        <Link href="/#features" className="text-[var(--foreground)] font-medium">Features</Link>
                        <Link href="/#application" className="text-[var(--foreground)] font-medium">Application</Link>
                        <Link href="/contact" className="text-[var(--foreground)] font-medium">Contact</Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >     {isOpen ? (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />) : (<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />)} </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-blue-700">
                    <Link href="/" className="block px-4 py-2 text-sm hover:bg-blue-600 transition">Home</Link>
                    <Link href="/analysis" className="block px-4 py-2 text-sm hover:bg-blue-600 transition">Analysis</Link>
                    <Link href="/#features" className="block px-4 py-2 text-sm hover:bg-blue-600 transition">Features</Link>
                    <Link href="/#application" className="block px-4 py-2 text-sm hover:bg-blue-600 transition">Application</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-blue-600 transition">Contact</Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
