import { useState } from 'react';

const BrandsAndClients = () => {
    // Premium Scientific Global Brands Map
    const brands = [
        { name: 'Sigma-Aldrich', origin: 'USA', sector: 'Chemicals & Reagents' },
        { name: 'Thermo Fisher Scientific', origin: 'USA', sector: 'Analytical Instruments' },
        { name: 'Pyrex Labware', origin: 'UK', sector: 'Precision Glassware' },
        { name: 'Eppendorf', origin: 'Germany', sector: 'Liquid Handling Systems' },
        { name: 'Duran Group', origin: 'Germany', sector: 'Premium Borosilicate Glass' },
        { name: 'Mettler Toledo', origin: 'Switzerland', sector: 'Weighing & Metrology' }
    ];

    // Enterprise Institutional Client Portfolio Map
    const clients = [
        { institution: 'Central University Research Laboratory', sector: 'Academic Research', project: 'Complete Glassware & Instrument Provisioning' },
        {
            institution: 'National Institute of Biotechnology', sector: 'Government R&D', project: 'High-Purity Analytical Chemical Supply Tender' },
        { institution: 'Apex Allied Pharmaceutical Industries', sector: 'Industrial Manufacturing', project: 'Porcelain Ware & Volumetric Glassware Contract' },
        { institution: 'Metropolitan Clinical Diagnostic Center', sector: 'Healthcare & Diagnostics', project: 'Liquid Handling Automation Integration' }
    ];

    return (
        <div className="w-full min-h-screen bg-slate-50 pt-28 pb-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">
                        Enterprise Portfolio
                    </span>
                    <h1 className="text-slate-900 font-extrabold text-3xl mt-3 tracking-tight">
                        Authorized Brands & Client Projects
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">
                        We represent the world’s leading manufacturers of laboratory equipment to fulfill critical institutional mandates with certified reliability.
                    </p>
                </div>

                {/* Section 1: Authorized Brand Matrix */}
                <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-blue-600 rounded-sm"></span>
                        Global Manufacturing Partners
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {brands.map((brand, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-500/30 transition-colors">
                                <div className="text-slate-900 font-bold text-base mb-0.5">{brand.name}</div>
                                <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold mb-2">{brand.origin}</div>
                                <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                                    {brand.sector}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: Completed Client Deployments */}
                <div className="mt-4">
                    <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-slate-900 rounded-sm"></span>
                        Institutional Client Deployments
                    </h3>
                    <div className="flex flex-col gap-4">
                        {clients.map((client, index) => (
                            <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                        {client.sector}
                                    </span>
                                    <h4 className="text-slate-800 font-bold text-base mt-2 mb-1">{client.institution}</h4>
                                    <p className="text-slate-500 text-xs font-medium">{client.project}</p>
                                </div>
                                <div className="text-left sm:text-right flex-shrink-0">
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Fulfilled & Certified
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrandsAndClients;
