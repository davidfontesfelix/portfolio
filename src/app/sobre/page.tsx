import SobreMimSection from '@/components/screens/SobreMimSection'
import Layout from '../../components/Layout'

export default function SobreMim() {
  return (
    <div>
      <div className="fade-in-visibility absolute z-50 h-screen w-screen bg-white"></div>
      <Layout local="sobre">
        <SobreMimSection />
      </Layout>
    </div>
  )
}
