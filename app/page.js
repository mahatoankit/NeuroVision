import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
      <div className="bg-[#050505]">
        <div className="min-h-[70vh] flex-wrap gap-2 w-full flex items-center justify-center px-5">
          <img src="gif.gif" className="lg:max-w-[500px] md:max-w-[300px] xl:max-w-650px[] flex-grow" alt="Brain Diagnosis Animation" />
          <div className="xl:w-[800px] lg:w-[700px] md:w-[600px]">

            <h1 className="xl:text-5xl font-bold leading-tight lg:text-4xl md:text-3xl sm:text-2xl">Enhancing Clarity in Brain Diagnosis</h1>

            <p className="mt-3 xl:text-lg md:text-md  sm:text-sm leading-relaxed">
              Empowering the future of brain tumor diagnosis with cutting-edge technology and precise imaging analysis. Transforming complex neuroimaging data into clear, actionable insights for better patient outcomes and advanced medical care.
            </p>

            <div className="gap-3 flex">
              <div className="rounded-md cursor-pointer xl:p-3 md:p-2 bg-[#f99601] my-4 w-fit shadow-lg hover:scale-105 transition-transform">
                <Link href="/analysis" className="text-[#353434] font-medium">
                  Analyze Now
                </Link>
              </div>

              <div className="rounded-md cursor-pointer xl:p-3 md:p-2 border border-[#494848] my-4 w-fit shadow-lg hover:scale-105 transition-transform">
                <Link href="/analysis" className="text-[#f99601] font-medium">
                  Buy Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#101010] py-16 px-6 ">
        <h2 className="text-center text-4xl font-bold mb-10">Why NeuroVision?</h2>
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

      <div className="bg-[#101010] py-12 px-6">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Model Prediction Showcase</h2>
        <div className="flex flex-wrap justify-center gap-6">

          <div className="bg-[#1c1c1c] p-4 rounded-lg shadow-md w-[400px] hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-[#f99601] mb-3">Example 1: Brain MRI</h3>
            <div className="flex gap-3">
              <img src="/original-scan.jpg" alt="Original Scan" className="w-1/2 rounded-md" />
              <img src="/predicted-scan.jpg" alt="Predicted Scan" className="w-1/2 rounded-md" />
            </div>
            <p className="text-gray-300 mt-3 text-sm">
              Detected: <span className="text-[#f99601]">Tumor with 95% Confidence</span>
            </p>
          </div>

          <div className="bg-[#1c1c1c] p-4 rounded-lg shadow-md w-[400px] hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-[#f99601] mb-3">Example 2: CT Scan</h3>
            <div className="flex gap-3">
              <img src="/ct-original.jpg" alt="Original Scan" className="w-1/2 rounded-md" />
              <img src="/ct-predicted.jpg" alt="Predicted Scan" className="w-1/2 rounded-md" />
            </div>
            <p className="text-gray-300 mt-3 text-sm">
              Detected: <span className="text-[#f99601]">Lung Infection</span>
            </p>
          </div>

          <div className="bg-[#1c1c1c] p-4 rounded-lg shadow-md w-[400px] hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-[#f99601] mb-3">Example 3: X-ray</h3>
            <div className="flex gap-3">
              <img src="/xray-original.jpg" alt="Original Scan" className="w-1/2 rounded-md" />
              <img src="/xray-predicted.jpg" alt="Predicted Scan" className="w-1/2 rounded-md" />
            </div>
            <p className="text-gray-300 mt-3 text-sm">
              Detected: <span className="text-[#f99601]">Fracture</span>
            </p>
          </div>

        </div>
      </div>

    </>
  );
}
