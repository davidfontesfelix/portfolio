import Header from '@/components/screens/Header'
import Layout from '@/components/Layout'

export default function Inicio() {
  return (
    <div>
      <div className="fade-in-visibility absolute z-50 h-screen w-screen bg-white"></div>
      <Layout local="inicio">
        <Header />
      </Layout>
    </div>
  )
}
