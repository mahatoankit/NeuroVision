'use client'

import React, { useState } from 'react';
import { appSlug } from '../common/common';
import { FaPlus, FaUpload } from 'react-icons/fa6';
import { FaImage, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa6'; // Icons for prediction status

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

            // Create image preview
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
            let res = await fetch(`${appSlug}//v1/neurovision/detect_brain`, {
                method: 'POST',
                body: form,
            });
            res = await res.json();
            if (res?.["isBrain"] === 'NB') {
                setMessage('The image is not a Brain MRI.');
                setMessageType('error');
                setResult(null);  // Clear previous results
                return;
            }
            setMessage('Processing image...');
            // Set the result after processing
            setResult(res);
        } catch (error) {
            setMessage('Error while processing the image. Please try again.');
            setMessageType('error');
            setResult(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#101010] text-white">
            <div
                className="min-h-[60vh] bg-center flex items-center justify-center relative overflow-hidden"
                style={{
                    backgroundImage: "url('/img/2.webp')",
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-90"></div>

                <div className="relative z-10 bg-[#303030] shadow-2xl rounded-lg p-8 max-w-2xl w-full">
                    <div className="text-center">
                        <p className="text-white text-lg mb-4">
                            Upload your MRI image for accurate analysis. Let technology help uncover the unseen.
                        </p>
                    </div>

                    <form onSubmit={handleFileUpload} className="space-y-6">
                        {/* File Input with Icon and Preview */}
                        <div className="text-center">
                            <label
                                htmlFor="fileInput"
                                className="inline-block bg-[#303030] p-6 cursor-pointer rounded-full"
                                title="Select new image."
                            >
                                {!imagePreview ? (
                                    <FaPlus color="#f99601" size={40} />
                                ) : (
                                    <div className="mt-4 text-center">
                                        <img
                                            src={imagePreview}
                                            className="mx-auto max-w-[120px] max-h-[120px] rounded-lg shadow-lg"
                                            alt="Preview"
                                        />
                                    </div>
                                )}
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <p className="text-xs italic text-gray-400">{fileName}</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#f99601] text-[#353434] font-semibold py-3 px-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Analyze Image
                        </button>
                    </form>

                    {/* Message Display */}
                    {message && (
                        <div
                            className={`mt-6 text-white text-center font-medium py-3 rounded-lg ${messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
                                }`}
                        >
                            {message}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8 bg-[#2d2d2d] text-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                {/* Image Preview Section */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold mb-4">Uploaded MRI Image</h2>
                    <div className="relative inline-block">
                        <img
                            src={imagePreview}
                            alt="Uploaded MRI"
                            className="rounded-lg shadow-xl max-w-[300px] max-h-[300px] object-cover"
                        />
                        {/* Optionally, display a loading spinner while the image is being uploaded */}
                    </div>
                </div>

                {/* Prediction Result */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Prediction Details</h3>
                    <div className="text-gray-300">
                        <p><strong>Tumor Type:</strong> {result?.tumorType || 'Unknown Tumor Type'}</p>
                        <p><strong>Confidence Level:</strong> {result?.confidenceLevel || 'N/A'}</p>
                        {result?.tumorType === 'Malignant' ? (
                            <p className="text-red-400 font-semibold mt-2">This is a malignant tumor. Immediate attention required!</p>
                        ) : (
                            <p className="text-green-400 font-semibold mt-2">This is a benign tumor. Regular monitoring is advised.</p>
                        )}
                    </div>
                </div>

                {/* Suggested Actions */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">Suggested Actions</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {result?.suggestedActions?.map((action, index) => (
                            <li key={index} className="flex items-center">
                                <FaCheckCircle color="#f99601" className="mr-2" />
                                {action}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Further Resources */}
                <div className="mt-4 text-center">
                    <button className="bg-[#f99601] text-[#353434] font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-all">
                        View Detailed Report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
