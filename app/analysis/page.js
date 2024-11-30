'use client'

import React, { useState } from 'react';
import { appSlug } from '../common/common';
import { FaLock, FaPlus } from 'react-icons/fa6';
import Link from 'next/link';
import Application from '../componenets/Application';

function App() {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [fileName, setFileName] = useState('Click the icon to select a file.');
    const [imagePreview, setImagePreview] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setFileName('Click the icon to select a file.');
            setImagePreview(null);
        }
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const fileInput = document.getElementById('fileInput');
        if (!fileInput.files.length) {
            setMessage('Please select a file before submitting!');
            setMessageType('error');
            return;
        }

        setMessage('Processing...');
        setMessageType('success');

        let form = new FormData();
        form.append('file', fileInput.files[0]);

        try {
            let res = await fetch(`${appSlug}/v1/neurovision/detect_brain`, {
                method: 'POST',
                body: form,
            });
            res = await res.json();
            if (res?.["isBrain"] === 'NB') {
                setMessage('The image is not a Brain MRI / Invalid ratio.');
                setMessageType('error');
                setResult(null);
                return;
            }
            setMessage('Processing image...');
            let {
                encephalitis,
                glioblastoma,
                glioma,
                medulloblastoma,
                meningioma,
                metastasis,
                pilocytic_astrocytoma
            } = {

            }
            res = await fetch(`${appSlug}/v1/neurovision/check_mri?encephalitis=${encephalitis || 1}&glioblastoma=${glioblastoma || 1}&glioma=${glioma || 1}&medulloblastoma=${medulloblastoma || 1}&meningioma=${meningioma || 1}&metastasis=${metastasis || 1}&pilocytic_astrocytoma=${pilocytic_astrocytoma || 1}`, {
                method: "POST",
                body: form
            })
            setMessage('Retreving Image MetaData...');
            res = await res.json();
            setMessage('Ready...');
            setResult(res)
        } catch (error) {
            setMessage('Error while processing the image. Please try again.');
            setMessageType('error');
            setResult(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#101010]">
            <div className="min-h-[60vh] bg-center flex items-center justify-center relative overflow-hidden" style={{ backgroundImage: "url('/img/2.webp')", backgroundBlendMode: 'overlay', backgroundSize: 'cover', }}>
                <div className="absolute inset-0 bg-black opacity-90"></div>
                <div className="relative z-10 bg-[#303030] shadow-2xl rounded-lg p-8 max-w-2xl w-full">
                    <div className="text-center">
                        <p className="text-white text-lg mb-4">
                            Upload your MRI image for accurate analysis. Let technology help uncover the unseen.
                        </p>
                    </div>

                    <form onSubmit={handleFileUpload} className="space-y-6">
                        <div className="text-center">
                            <label htmlFor="fileInput" className="inline-block bg-[#303030] p-6 cursor-pointer rounded-full" title="Select new image.">
                                {!imagePreview ? <div className='border rounded-full p-2'>
                                    <FaPlus color="#f99601" size={40} />
                                </div> : <div className="mt-4 text-center">
                                    <img src={imagePreview} className="mx-auto max-w-[120px] max-h-[120px] rounded-lg shadow-lg" alt="Preview" />
                                </div>}
                            </label>
                            <input type="file" id="fileInput" accept="image/*" className="hidden" onChange={handleFileChange} />
                            <p className="text-xs italic text-gray-400">{fileName}</p>
                        </div>

                        <button type="submit" className="w-full bg-[#f99601] text-[#353434] font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                            Analyze Image
                        </button>
                    </form>

                    {message && <div className={`mt-6 text-white text-center font-medium py-3 rounded-lg ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                        {message}
                    </div>}
                </div>
            </div>

            {result ? <div className='mt-8 rounded-lg p-6'>
                <div className="flex gap-3 mx-auto items-center justify-center max-w-[1100px]">
                    <div className="">
                        <img src={imagePreview} className='h-[300px] w-auto border border-[#303030]' />
                    </div>
                    <div className=''>
                        <div className='w-[500px]'>
                            {Object.entries(result.matrix).map(([condition, value]) => (
                                <div key={condition} className="mb-4">
                                    <p className="text-sm capitalize mb-1">{condition}: <span className="font-semibold">{(parseFloat(value) * 100).toFixed(2)}%</span></p>
                                    <div className="h-[3px] bg-[#303030] rounded">
                                        <div className="h-full bg-[#f99601] rounded" style={{ width: `${parseFloat(value) * 100}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='max-w-[1000px] mx-auto'>
                    <h2 className='text-2xl text-center font-semibold my-5'>Confident:- <span className='text-[#f99601]'>{result?.confidence}</span> on <span className='text-[#f99601] capitalize'>{result?.type}</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(result.meta_data).map(([key, value]) => (
                            <div key={key} className="p-4 bg-[#303030] rounded-lg shadow">
                                <p className="capitalize"><span className='text-[#f99601]'>{key.replace(/_/g, ' ')}</span>:- {value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {result?.type !== "N/A" ? <>
                    <div className="relative mx-auto my-6 mt-[100px] max-w-[1200px]">
                        <div className="border-t-2 border-[#303030]"></div>
                        <Link href="/premium" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#353434]">
                            <div className="p-2 px-3 flex items-center gap-2 bg-[#f99601] text-center rounded-md cursor-pointer hover:scale-105 transition-all shadow-lg">
                                View More on Premium <FaLock />
                            </div>
                        </Link>
                    </div>


                    <div className="bg-[#101010] py-12 px-6">
                        <h2 className="text-center text-3xl font-bold mb-2" id='contact'>Ready to Transform Diagnostics?</h2>
                        <p className="text-center text-gray-300 mb-6">
                            Join countless medical professionals leveraging AI for precise and efficient brain tumor diagnosis.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/analysis" className="text-[#353434] font-medium">
                                <div className="rounded-md cursor-pointer p-4 bg-[#f99601] shadow-lg hover:scale-105 transition-transform">
                                    Check Again
                                </div>
                            </Link>
                            <Link href="/contact" className="text-[#f99601] font-medium">
                                <div className="rounded-md cursor-pointer p-4 border border-[#494848] shadow-lg hover:scale-105 transition-transform">
                                    Buy Now
                                </div>
                            </Link>
                        </div>
                    </div>
                </> : <>
                    <Application />
                </>}
            </div> : <>
                <Application />
                <div className="bg-[#101010] py-12 px-6">
                    <h2 className="text-center text-3xl font-bold mb-2" id='contact'>Ready to Transform Diagnostics?</h2>
                    <p className="text-center text-gray-300 mb-6">
                        Join countless medical professionals leveraging AI for precise and efficient brain tumor diagnosis.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/analysis" className="text-[#353434] font-medium">
                            <div className="rounded-md cursor-pointer p-4 bg-[#f99601] shadow-lg hover:scale-105 transition-transform">
                                Contact Us
                            </div>
                        </Link>
                        <Link href="/contact" className="text-[#f99601] font-medium">
                            <div className="rounded-md cursor-pointer p-4 border border-[#494848] shadow-lg hover:scale-105 transition-transform">
                                Buy Now
                            </div>
                        </Link>
                    </div>
                </div>
            </>}
        </div>
    );
}

export default App;
