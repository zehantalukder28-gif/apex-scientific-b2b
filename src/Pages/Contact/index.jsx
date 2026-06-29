import { useState } from 'react';

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    return (
        <div className="w-full min-h-screen bg-slate-50 pt-28 pb-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                        Connect With Us
                    </span>
                    <h1 className="text-slate-900 font-extrabold text-3xl mt-3 tracking-tight">
                        Contact Our Procurement Desk
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">
                        Have custom bulk inquiries, contract manufacturing requirements, or instrument service requests? Get in touch with our specialists.
                    </p>
                </div>

                {/* Main Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    {/* Left Side: Contact Form Container */}
                    <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                        <h3 className="text-slate-900 font-bold text-lg mb-6">Submit an Official Inquiry</h3>
                        
                        {formSubmitted ? (
                            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-lg text-center">
                                <p className="font-semibold mb-1">Inquiry Submitted Successfully</p>
                                <p className="text-xs text-emerald-600">Our corporate desk will reply via formal correspondence within 24 business hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                setFormSubmitted(true);
                            }} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Corporate Email</label>
                                        <input required type="email" placeholder="name@company.com" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Official Phone</label>
                                        <input required type="tel" placeholder="+880..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Subject Matter</label>
                                    <input required type="text" placeholder="e.g., Bulk Laboratory Glassware Tender" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-slate-600 mb-1">Message Body</label>
                                    <textarea required rows="4" placeholder="Specify item codes, grades, or custom parameters..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 resize-none"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm shadow-sm mt-2">
                                    Transmit Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right Side: Google Map & Office Card */}
                    <div className="flex flex-col gap-6 h-full">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col gap-3">
                            <h4 className="text-slate-900 font-bold text-base">Headquarters & Logistics Depot</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">
                                Apex Scientific Tower, Corporate Avenue, Dhaka, Bangladesh.<br />
                                <strong>Operations:</strong> Sun - Thu, 09:00 AM - 06:00 PM (GMT+6)
                            </p>
                        </div>
                        
                        {/* Map Container Element */}
                        <div className="w-full flex-1 min-h-[300px] bg-slate-200 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative">
                            <iframe 
                                title="Apex Scientific Headquarters Map Location"
                                src="https://maps.google.com/maps?q=Dhaka,Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                                className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-125"
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
