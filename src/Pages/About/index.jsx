import Layout from '../../Components/Layout'

function About() {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">Enterprise Procurement Solutions</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <p className="text-slate-600 leading-relaxed mb-6">
            Welcome to our Enterprise Procurement platform. We are dedicated to delivering high-grade scientific instruments, pure laboratory chemicals, and essential supplies through a highly streamlined and resilient logistics network.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            With strict adherence to certified standards (including ISO 9001 and ISO 13485) and comprehensive supply chain tracking, we ensure that your critical research operations remain uninterrupted. Our specialized RFQ system is engineered to provide bulk procurement efficiency and dedicated account management for B2B partners.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Partner with us to optimize your laboratory workflows and benefit from our unparalleled global distribution capabilities.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
