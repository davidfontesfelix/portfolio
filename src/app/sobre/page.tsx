import SobreMimSection from '@/screens/SobreMimSection'
import Layout from '../../Layout'

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
