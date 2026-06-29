import Layout from '../../Components/Layout'

function Clients() {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-800 mb-4 text-center">Industrial Sectors Served</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          We proudly supply and support leading institutions across critical research and industrial domains worldwide.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Healthcare & Diagnostic Laboratories</h3>
            <p className="text-slate-600 leading-relaxed">
              Providing certified clinical diagnostic tools, highly-regulated reagents, and sterile consumables essential for patient care and accurate diagnostic outcomes.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Industrial Manufacturing QA</h3>
            <p className="text-slate-600 leading-relaxed">
              Supplying heavy-duty testing apparatus and precise material analysis instruments for robust quality assurance and compliance in manufacturing pipelines.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Academic Research Institutes</h3>
            <p className="text-slate-600 leading-relaxed">
              Partnering with global universities and core research facilities to equip the next generation of scientific discovery with state-of-the-art tools.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Clients
