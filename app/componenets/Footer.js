import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer style={{ boxShadow: "rgba(255, 255, 255, 0.15) 0px 0px 20px 0px", background: "#1c1c1c" }} className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <div className="max-w-[370px]">
                        <div className="flex gap-2 justify-center items-center mb-4">
                            <img src="/img/icon.png" className="w-[30px]" />
                            <h2 className="text-2xl font-bold">NeuroVision</h2>
                        </div>
                        <p className="text-sm">
                            Revolutionizing brain tumor diagnosis with precision and clarity, making neuroimaging more accurate and insightful.
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://facebook.com/drohankoirala" target="_blank" className="hover:text-[#f99601]">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://instagram.com/drohankoirala" target="_blank" className="hover:text-[#f99601]">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com/in/drohankoirala" target="_blank" className="hover:text-[#f99601]">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/drohankoirala" target="_blank" className="hover:text-[#f99601]">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#4e4e4e] mt-4 pt-4 flex justify-between">
                    <div className="text-center">
                        Copyright © {new Date().getFullYear()} | <Link href="/" className="text-[#f99601]">NeuroVision</Link>
                    </div>
                    <div className="space-x-6">
                        <a href="/analysis" className="hover:text-[#f99601]">Analysis</a>
                        <a href="#features" className="hover:text-[#f99601]">Features</a>
                        <a href="/#application" className="hover:text-[#f99601]">Application</a>
                        <a href="/contact" className="hover:text-[#f99601]">Contact</a>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;
