import React from 'react'

export default function Features() {
    return <div className="bg-[#101010] py-16 px-6 ">
        <h2 className="text-center text-4xl font-bold mb-10" id="features">Why NeuroVision?</h2>
        <div className="flex flex-wrap justify-center gap-8">

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-[500px] hover:scale-105 transition-transform">
                <h3 className="text-2xl font-semibold text-[#f99601] mb-3">Advanced Technology</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>AI-powered algorithms for precise imaging and diagnosis.</li>
                    <li>Significant reduction in diagnostic time, enhancing efficiency.</li>
                    <li>Robust performance with minimal human intervention.</li>
                    <li>Optimized for scalability in diverse clinical environments.</li>
                </ul>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-[500px] hover:scale-105 transition-transform">
                <h3 className="text-2xl text-[#f99601] font-semibold mb-3">Expert Insights</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Designed with feedback from top neurologists and radiologists.</li>
                    <li>Integrates domain knowledge for enhanced interpretation accuracy.</li>
                    <li>Continuously updated with cutting-edge medical research.</li>
                </ul>
            </div>

            <div className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg w-[500px] hover:scale-105 transition-transform">
                <h3 className="text-2xl text-[#f99601] font-semibold mb-3">Better Outcomes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Improved diagnostic accuracy leads to better patient care.</li>
                    <li>Empowers physicians to devise targeted treatment strategies.</li>
                    <li>Reduces errors, ensuring reliable and consistent results.</li>
                    <li>Enhances patient confidence with transparent, data-driven insights.</li>
                </ul>
            </div>

        </div>
    </div>
}
