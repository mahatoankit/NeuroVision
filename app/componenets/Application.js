import React from 'react'

export default function Application() {
    return <div className="bg-[#101010] py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-8" id="application">Applications of NeuroVision</h2>
        <div className="flex flex-wrap max-w-[1300px] mx-auto gap-10 justify-center">
            <div className="flex bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform max-w-[600px]">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#f99601] mb-3">Early Diagnosis</h3>
                    <p className="text-gray-300">
                        Early detection of brain tumors is critical for successful treatment.
                        NeuroVision provides rapid and accurate diagnosis, enabling doctors to act promptly.
                    </p>
                </div>
            </div>

            <div className="flex bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform max-w-[600px]">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#f99601] mb-3">Second Opinion</h3>
                    <p className="text-gray-300">
                        NeuroVision serves as a trusted second opinion for medical professionals,
                        reducing diagnostic errors and ensuring confidence in treatment strategies.
                    </p>
                </div>
            </div>

            <div className="flex bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform max-w-[600px]">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#f99601] mb-3">Research and Development</h3>
                    <p className="text-gray-300">
                        Ideal for researchers, NeuroVision assists in clinical trials and the
                        development of innovative protocols in neuro-oncology and AI-based diagnostics.
                    </p>
                </div>
            </div>

            <div className="flex bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform max-w-[600px]">
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#f99601] mb-3">Education and Training</h3>
                    <p className="text-gray-300">
                        Medical schools and institutions can use NeuroVision as a teaching tool, helping
                        students and professionals learn about neuroimaging and tumor identification.
                    </p>
                </div>
            </div>
        </div>
    </div>
}
