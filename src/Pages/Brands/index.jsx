import Layout from '../../Components/Layout'

function Brands() {
  return (
    <Layout>
      <div className="w-full max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-12">Global Manufacturing Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white py-12 px-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[12rem] transition-all hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-800">Global Analytics Corp</h3>
            <p className="text-sm text-slate-500 mt-3 font-medium tracking-wide">Precision Instruments</p>
          </div>
          <div className="bg-white py-12 px-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[12rem] transition-all hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-800">Precision Glassworks</h3>
            <p className="text-sm text-slate-500 mt-3 font-medium tracking-wide">Laboratory Glassware</p>
          </div>
          <div className="bg-white py-12 px-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center min-h-[12rem] transition-all hover:shadow-md hover:-translate-y-1">
            <h3 className="text-xl font-bold text-slate-800">BioChemical Standards Group</h3>
            <p className="text-sm text-slate-500 mt-3 font-medium tracking-wide">Research Grade Chemicals</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Brands
