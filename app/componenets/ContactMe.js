import Link from 'next/link'
import React from 'react'

export default function ContactMe() {
    return <div className="bg-[#101010] py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-2" id='contact'>Ready to Transform Diagnostics?</h2>
        <p className="text-center text-gray-300 mb-6">
            Join countless medical professionals leveraging AI for precise and efficient brain tumor diagnosis.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/analysis" className="text-[#353434] font-medium">
                <div className="rounded-md cursor-pointer p-4 bg-[#f99601] shadow-lg hover:scale-105 transition-transform">
                    Analyze demo
                </div>
            </Link>
            <Link href="/contact" className="text-[#f99601] font-medium">
                <div className="rounded-md cursor-pointer p-4 border border-[#494848] shadow-lg hover:scale-105 transition-transform">
                    Contact Us
                </div>
            </Link>
        </div>
    </div>
}
