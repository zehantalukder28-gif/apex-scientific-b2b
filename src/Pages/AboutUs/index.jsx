import React, { useEffect } from 'react';
import Layout from '../../Components/Layout';
import { Target, Users, Globe2, ShieldCheck, Beaker } from 'lucide-react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className="w-full bg-white pt-28 pb-20">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 mb-4 block">Corporate Profile</span>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6">
                            Precision, Integrity, and Scientific Excellence.
                        </h1>
                        <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                            Apex Scientific is the premier international supplier of B2B laboratory solutions. We empower research facilities, clinical laboratories, and industrial enterprises with high-fidelity scientific instruments, high-purity chemicals, and specialized laboratory apparatus.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
                        <div className="bg-slate-100 aspect-[4/3] rounded-sm overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800&q=80" alt="Laboratory Operations" className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="grid grid-rows-2 gap-6">
                            <div className="bg-slate-100 rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" alt="Precision Instruments" className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="bg-slate-100 rounded-sm overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1617155093730-a8bf47be792d?auto=format&fit=crop&w=800&q=80" alt="Chemical Synthesis" className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Mission & Values */}
                    <div className="border-t border-slate-200 pt-20 pb-16">
                        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-12 text-center">Our Core Tenets</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Absolute Precision</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Every instrument and reagent we supply undergoes rigorous multi-point QA to guarantee flawless performance in critical applications.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 text-slate-800 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Global Compliance</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    ISO 9001:2015 certified operations ensuring all materials strictly adhere to international safety and GLP standards.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 text-slate-800 rounded-full flex items-center justify-center mb-6">
                                    <Beaker className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Innovation Engine</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    We continually source state-of-the-art technological advancements to push the boundaries of laboratory capabilities.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-50 border border-slate-200 text-slate-800 rounded-full flex items-center justify-center mb-6">
                                    <Globe2 className="w-8 h-8" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Logistics Network</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Operating across 45+ regions, we guarantee secure, climate-controlled, and expedited international B2B delivery.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Enterprise Stats */}
                    <div className="bg-slate-950 text-white rounded-sm p-12 md:p-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center my-12">
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">25+</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">10k+</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Products Catalog</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">45</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Countries Served</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">100%</div>
                            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Compliance Rate</div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
