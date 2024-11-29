'use client'

import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        domain: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Organization name is required.';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'A valid email is required.';
        if (!formData.organization) errors.organization = 'Organization name is required.';
        if (formData.phone && !/^\+?\d{10,15}$/.test(formData.phone)) errors.phone = 'Enter a valid phone number.';
        if (!formData.message) errors.message = 'Please describe what your organization does.';
        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);
        setSuccessMessage('');

        setTimeout(() => {
            setIsSubmitting(false);
            setSuccessMessage('Thank you! Your details have been submitted.');
            setFormData({
                name: '',
                email: '',
                organization: '',
                domain: '',
                phone: '',
                message: '',
            });
        }, 2000);
    };

    return (
        <div className="bg-[#101010] min-h-screen py-16 px-6">
            <div className="max-w-5xl mx-auto rounded-lg shadow-lg p-8 text-gray-300">
                <div className="mb-10">
                    <h2 className="text-2xl font-semibold mb-1 text-[#f99601] text-center">We’d Love to Hear From You!</h2>
                    <p className="text-center mb-4">Our staff will check your organization details and get back to you within 24 hours.</p>
                    {successMessage && <p className="text-green-500 text-center mt-6">{successMessage}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-2">Organization Name</label>
                            <input type="text" id="name" name="name" className={`w-full bg-[#1c1c1c] border ${errors.name ? 'border-red-500' : 'border-[#494848]'} rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]`} placeholder="Organization Name" value={formData.name} onChange={handleInputChange} />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2">Organization Email</label>
                            <input type="email" id="email" name="email" className={`w-full bg-[#1c1c1c] border ${errors.email ? 'border-red-500' : 'border-[#494848]'} rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]`} placeholder="you@example.com" value={formData.email} onChange={handleInputChange} />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="organization" className="block mb-2">Organization Name</label>
                            <input type="text" id="organization" name="organization" className={`w-full bg-[#1c1c1c] border ${errors.organization ? 'border-red-500' : 'border-[#494848]'} rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]`} placeholder="Your Company Name" value={formData.organization} onChange={handleInputChange} />
                            {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                        </div>
                        <div>
                            <label htmlFor="domain" className="block mb-2">Organization URL</label>
                            <input type="text" id="domain" name="domain" className="w-full bg-[#1c1c1c] border border-[#494848] rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]" placeholder="www.yourcompany.com" value={formData.domain} onChange={handleInputChange} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2">Organization Contact Number</label>
                            <input type="tel" id="phone" name="phone" className={`w-full bg-[#1c1c1c] border ${errors.phone ? 'border-red-500' : 'border-[#494848]'} rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]`} placeholder="+1 (234) 567-890" value={formData.phone} onChange={handleInputChange} />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2">What your organization does?</label>
                            <textarea id="message" name="message" rows="5" className={`w-full bg-[#1c1c1c] border ${errors.message ? 'border-red-500' : 'border-[#494848]'} rounded-md p-3 text-gray-300 focus:outline-none focus:border-[#f99601]`} placeholder="Write your message here..." value={formData.message} onChange={handleInputChange}></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <button type="submit" className={`w-full bg-[#f99601] text-[#1c1c1c] font-medium py-3 rounded-md shadow-lg transition-transform ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:scale-105'}`} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Details'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
