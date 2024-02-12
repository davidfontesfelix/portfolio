import Header from '@/screens/Header'
import Layout from '@/Layout'

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
