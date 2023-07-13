import Header from '@/components/Header'
import Layout from '@/components/Layout'

export default function Inicio() {
  return (
    <div>
      <div className="w-screen absolute z-50 h-screen bg-white fade-in-visibility"></div>
      <Layout local="inicio">
        <Header />
      </Layout>
    </div>
  )
}
